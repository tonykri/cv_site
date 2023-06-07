'use client'
import axios from "axios";
import { Button, Card } from "flowbite-react";


export default function NotificationCard(props:any) {

    function DeleteNotification(){
        axios.get(`http://localhost:8080/notifications/deleteContactForm/${props.notification.applicationId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
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
                        Sent by: {props.notification.name}
                    </p>
                    <Button onClick={DeleteNotification}>Complete</Button>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: {props.notification.email}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Role: {props.notification.role}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Content: {props.notification.content}
                    </p>
                </div>
            </Card>
        </div>

    )
}
