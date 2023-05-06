'use client'
import { Card } from "flowbite-react";


export default function UniversityCard() {



    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


    function handleUpdate() {

    }

    return (
        <div>

            <Card className="mt-3">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    University
                </h5>

                <div className="mx-4">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Departments: Informatics, Economics
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Founded: 2002
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: email
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Website: website
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        VAT Number: 123456789
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Headquarters: Piraeus
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        About: text
                    </p>
                </div>
            </Card>
        </div>

    )
}