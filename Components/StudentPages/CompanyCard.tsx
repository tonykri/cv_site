'use client'
import axios from "axios";
import { Button, Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillStar } from 'react-icons/ai'
import { useTheme } from "next-themes";


export default function CompanyCard(props:any) {
    const [saved, setSaved] = useState(props.job.saved);
    const [applied, setApplied] = useState(props.job.applied);
    const { theme } = useTheme();

    function saveJobOffer(){
        axios.get(`http://localhost:8080/save/student/${props.job.id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res);
            setSaved(!saved)
        }).catch(err => console.error(err))
    }

    function Apply(){
        axios.get(`http://localhost:8080/job/apply/${props.job.id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res);
            setApplied(true)
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
                        {props.job.jobPosition}
                    </h5>
                    <div className="text-4xl flex gap-4">
                        <Tooltip content={saved ? "Remove" : "Save"}>
                            <AiFillStar color={saved ? "yellow" : "gray"} onClick={() => saveJobOffer()} />
                        </Tooltip>
                        <Button onClick={() => Apply()} color={applied ? 'success' : 'gray'}>{applied ? 'Applied' : "Apply"}</Button>
                    </div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Company Name: {props.job.name}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Headquarters: {props.job.headquarters}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Website: {props.job.website}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Experience: {props.job.yearsOfExperience}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Languages: {props.job.languages}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    About: {props.job.about}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Skills: {props.job.skills}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Industry: {props.job.industry}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Company Size: {props.job.companySize}
                </p>
            </Card>
        </div>

    )
}