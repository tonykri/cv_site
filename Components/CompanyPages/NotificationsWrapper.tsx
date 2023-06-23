'use client'
import { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NotificationsWrapper(){
    const [refresh, setRefresh] = useState(false)
    const [notifications, setNotifications] = useState([{
        studentId : "",
        birthdate : ""
    }])
    const router = useRouter()

    useEffect(()=>{
        axios.get(`http://localhost:8080/notifications/company`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        setNotifications(res.data);
      }).catch(err => {
        console.log(err);
        router.push('/');
        alert('Error: Please try again');
      });
    }, [refresh])

    function Refresh(){
        setRefresh(!refresh)
    }

    return(
        <div className="container mx-auto my-5">
            {notifications.length === 0 && <div className="w-full h-full flex justify-center">
                <h1 className="text-2xl text-center mt-4">No new job applicants</h1>
                </div>}
            {notifications.map(notification => (<NotificationCard key={notification.studentId} Refresh={Refresh} notification={notification}/>))}
        </div>
    )
}