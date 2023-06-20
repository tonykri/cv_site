'use client'
import axios from "axios";
import { Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useTheme } from "next-themes";


export default function StudentCard(props: any) {
    const [saved, setSaved] = useState(props.student.saved)
    const { theme } = useTheme();

    function saveStudent(){
        axios.get(`http://localhost:8080/save/company/${props.student.id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res);
            setSaved(!saved)
        }).catch(err => console.error(err))
    }

  // Define the background color based on the theme
  let backgroundColor;
  if (theme === "light") {
    backgroundColor = "rgb(203 213 225)";
  } else if (theme === "dark") {
    backgroundColor = "rgb(31 41 55)";
  } else {
    backgroundColor = "transparent";
  }

    return (
        <div>

            <Card className="mt-3" style={{ backgroundColor }}>
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
                    <br></br>
                    {props.student.companyName ?
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Currently Working at: {props.student.companyName}
                        </p>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Status: Unemployed                            
                        </p>} 
                </div>
            </Card>
        </div>

    )
}
