'use client'
import axios from "axios";
import { Button, Card } from "flowbite-react";


export default function NotificationCard(props:any) {

    function DeleteNotification(){
        axios.get(`http://localhost:8080/university/deleteContactForm/${props.student.applicationId}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res.data);
            props.setViewSuccess(true)
            props.Refresh()
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div>
            <Card className="mt-3">
                <div className="mx-4">
                    <div className="flex justify-between">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Sent by: {props.student.firstname} {props.student.lastname}
                    </p>
                    <Button onClick={DeleteNotification}>Complete</Button>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: {props.student.email}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Department: {props.student.department}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Diploma Id: {props.student.diplomaId}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Diploma Id: {props.student.content}
                    </p>
                </div>
            </Card>
        </div>

    )
}
