'use client'
import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useTheme } from "next-themes";


export default function NotificationCard(props:any) {
    const { theme } = useTheme();

    function AcceptStudent(id:string){
        axios.get(`http://localhost:8080/job/accept/${props.notification.applicationId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        alert('Accepted successfuly');
        props.Refresh();
      }).catch(err => {
        console.log(err);
        alert('Error: Please try again');
      });
    }

    function RejectStudent(id:string){
        axios.get(`http://localhost:8080/job/decline/${props.notification.applicationId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        alert('Deleted successfuly');
        props.Refresh();
      }).catch(err => {
        console.log(err);
        alert('Error: Please try again');
      });
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
                <div className="mx-4">
                    <div className="flex justify-between">
                        <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">
                            {props.notification.jobPosition}
                        </p>
                        <div className="flex gap-4">
                            <Button color={'red'} onClick={()=>RejectStudent(props.notification.studentId)}>Reject</Button>
                            <Button onClick={()=>AcceptStudent(props.notification.studentId)}>Accept</Button>
                        </div>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        firstname: {props.notification.firstname} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        lastname: {props.notification.lastname} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        email: {props.notification.email} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        birthdate: {props.notification.birthdate.substring(0,10)} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        university: {props.notification.university} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        department: {props.notification.department} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        languages: {props.notification.languages} 
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        years of work experience: {props.notification.yearsOfExperience} 
                    </p>
                </div>
            </Card>
        </div>

    )
}
