'use client';
import { useState } from "react";
import RegisterFormStudent from "./RegisterFormStudent";
import RegisterFormCompany from "./RegisterFormCompany";

export default function RegisterFormWrapper(props: any) {
    const [studentForm, showStudentForm] = useState(true)


    function viewLogin() {
        props.viewLogin(true)
    }

    return (
        <div className="mt-2">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    You are:
                    <div className="flex items-center">
                        <input checked={studentForm} type="radio" value="" onClick={(e) => showStudentForm(true)} onChange={() => console.log()} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                    </div>
                    <div className="flex items-center">
                        <input checked={!studentForm} type="radio" value="" onClick={(e) => showStudentForm(false)} onChange={() => console.log()} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                    </div>
                </label>
            </div>

                <div className="w-full">
                    {studentForm ? <RegisterFormStudent viewLogin={viewLogin} /> : <RegisterFormCompany viewLogin={viewLogin} />}
                </div>
        </div>
    )
}
