'use client'
import { Card } from "flowbite-react";


export default function StudentCard() {


    return (
        <div>

            <Card className="mt-3">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Firstname Lastname
                </h5>

                <div className="mx-4">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Department: Informatics
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Birthdate: 10/10/2002
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: email
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        High School: high school
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Graduation Year: 2024
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        DiplomaId: id
                    </p>
                </div>
            </Card>
        </div>

    )
}
