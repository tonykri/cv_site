'use client'
import axios from "axios";
import { Button, Card, Modal, Tooltip } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { HiOutlineExclamationCircle } from "react-icons/hi";


export default function StudentCard(props: any) {
    const [edit, setEdit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [firstname, setFirstname] = useState(props.student.firstname)
    const [lastname, setLastname] = useState(props.student.lastname)
    const [department, setDepartment] = useState(props.student.department)
    const [birthdate, setBirthdate] = useState(props.student.birthdate)
    const [email, setEmail] = useState(props.student.email)
    const [university, setUniversity] = useState(props.student.university)
    const [languages, setLanguages] = useState(props.student.languages)
    const [companyName, setCompanyName] = useState(props.student.companyName)

    function handleUpdate() {
        axios.post('http://localhost:8080/admin/editStudent', {
            "id": props.student.id,
            "firstname": firstname,
            "lastname": lastname,
            "birthdate": birthdate,
            "email": email,
            "languages": languages,
            "companyName": companyName
        },{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            setEdit(false)
            alert("Updated successfully")
        }).catch(err => {
            console.log(err);
            alert(err.response.data)
        });
    }

    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


    function DeleteAccount() {
        axios.delete(`http://localhost:8080/admin/delete/${props.student.id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
            alert("Account deleted successfully");
            props.Refresh()
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>

            <Card className="mt-3">
                <div className="flex justify-between">
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Name:
                            <input type="text" id="diplomaId" className={cssUnit} value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                            <input type="text" id="diplomaId" className={cssUnit} value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                        </label> :
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {firstname} {lastname}
                        </h5>
                    }
                    <div className="text-2xl flex gap-4">
                        {edit ?
                            <div className="flex gap-4 mt-2">
                                <div onClick={() => setEdit(false)}>
                                    <Tooltip content='Cancel'>
                                        <GiCancel color="red" />
                                    </Tooltip>
                                </div>
                                <div onClick={handleUpdate}>
                                    <Tooltip content='Save'>
                                        <AiFillSave color="blue" />
                                    </Tooltip>
                                </div>
                            </div> :
                            <div className="mt-2" onClick={() => setEdit(true)}>
                                <Tooltip content='Edit'>
                                    <AiFillEdit />
                                </Tooltip>
                            </div>}
                            <React.Fragment>
                                <Button onClick={() => setShowModal(true)} className="w-full" color="failure">
                                    Delete
                                </Button>
                                <Modal
                                    show={showModal}
                                    size="md"
                                    popup={true}
                                >
                                    <Modal.Body>
                                        <div className="text-center pt-4">
                                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                Are you sure you want to delete this account?
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                                <Button
                                                    color="failure"
                                                    onClick={() => DeleteAccount()}
                                                >
                                                    Yes, I'm sure
                                                </Button>
                                                <Button
                                                    color="gray"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    No, cancel
                                                </Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </React.Fragment>
                    </div>
                </div>

                <div className="mx-4">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        University: {university}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Department: {department}
                    </p>
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Birthdate:
                            <input type="date" id="birthdate" className={cssUnit} value={birthdate.substring(0, 10)} onChange={(e) => setBirthdate(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Birthdate: {birthdate.substring(0, 10)}
                        </p>}
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email:
                            <input type="text" id="email" className={cssUnit} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Email: {email}
                        </p>}
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Languages:
                            <input type="text" id="languages" className={cssUnit} value={languages} onChange={(e) => setLanguages(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Languages: {languages}
                        </p>}
                    <br></br>
                    {companyName ?
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Currently working in: {companyName}
                        </p>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Status: Unemployed                            
                        </p>} 
                </div>
            </Card>
        </div>

    )
}
