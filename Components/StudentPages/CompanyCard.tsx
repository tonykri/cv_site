'use client'
import { Button, Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillStar } from 'react-icons/ai'


export default function CompanyCard() {
    const [saved, setSaved] = useState(false);
    const [applied, setApplied] = useState(false);

    return (
        <div>

            <Card className="mt-3">
                <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Job Position: programmer
                    </h5>
                    <div className="text-4xl flex gap-4">
                        <Tooltip content={saved ? "Remove" : "Save"}>
                            <AiFillStar color={saved ? "yellow" : "gray"} onClick={() => setSaved(!saved)} />
                        </Tooltip>
                        <Button onClick={() => setApplied(true)} color={applied ? 'success' : 'gray'}>{applied ? 'Applied' : "Apply"}</Button>
                    </div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Company Name: Company
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Headquarters: Piraeus
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Email: email@company.com
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Experience: 2 Years
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Languages: English
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    About: text
                </p>
            </Card>
        </div>

    )
}