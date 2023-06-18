'use client'
import axios from "axios";
import { useState } from "react";

export default function ChangePasswordForm() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const [viewSuccess, setViewSuccess] = useState(false);

    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    async function handleSubmit(e: any) {
        e.preventDefault();
        setWrongCredentials(false);
        axios.put('http://localhost:8080/account/changePassword', {
            "currentPassword": currentPassword,
            "newPassword": password,
            "confirmPassword": confirmPassword
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            } 
        }).then(res => {
            console.log(res.data);
            setViewSuccess(true);
        }).catch(err => {
            setWrongCredentials(true);
            console.log(err);
        });

    }

    return (
        <div className="w-full h-full justify-center items-center">
            <h1 className="text-4xl mt-4 text-center">Change Password</h1>
            <div className="h-screen mt-2 justify-center items-center md:flex">
                <form onSubmit={handleSubmit} className="">
                    {viewSuccess && <div id="toast-success" className=" m-auto mt-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ml-3 text-sm font-normal">Password changed successfully.</div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={() => setViewSuccess(false)}>
                            <span className="sr-only">Close</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Current Password:
                            <input type="password" id="email" className={cssUnit} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            New Password:
                            <input type="password" id="password" className={cssUnit} value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Confirm Password:
                            <input type="password" id="confirmPassword" className={cssUnit} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </label>
                    </div>
                    <div className="mb-6 flex justify-start">
                    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
                    </div>
                    {wrongCredentials && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
                        <strong className="font-bold">Oups!</strong>
                        <span className="block sm:inline"> Try again</span>
                    </div>}

                </form>
            </div>
        </div>
    )
}