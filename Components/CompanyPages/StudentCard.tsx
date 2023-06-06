'use client'
import axios from "axios";
import { Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";


export default function StudentCard(props: any) {
    const [saved, setSaved] = useState(props.student.saved)

    function saveStudent(){
        axios.get(`http://localhost:8080/save/company/${props.student.id}`,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res);
            setSaved(!saved)
        }).catch(err => console.error(err))
    }

    return (
        <div>

            <Card className="mt-3">
                <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.student.firstname} {props.student.lastname}
                </h5>
                <div className="text-2xl">
                <Tooltip content={props.saved ? "Remove" : "Save"}>
                            <AiFillStar color={saved ? "yellow" : "gray"} onClick={() => saveStudent()} />
                </Tooltip>
                </div>
                </div>

                <div className="mx-4">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        University: {props.student.university}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Department: {props.student.department}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Birthdate: {props.student.birthdate.substring(0,10)}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: {props.student.email}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Languages: {props.student.languages}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        DiplomaId: {props.student.diplomaId}
                    </p>
                </div>
            </Card>
        </div>

    )
}
