'use client'
import axios from "axios";
import { Button, Card, Modal, Tooltip } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { HiOutlineExclamationCircle } from "react-icons/hi";


export default function UniversityCard(props:any) {
    const [edit, setEdit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState(props.university.email)
    const [name, setName] = useState(props.university.name)
    const [vatNumber, setVatNumber] = useState(props.university.vatNumber)
    const [website, setWebsite] = useState(props.university.website)
    const [headquarters, setHeadquarters] = useState(props.university.headquarters)
    const [founded, setFounded] = useState(props.university.founded)


    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


    function handleUpdate() {
        axios.post('http://localhost:8080/admin/editUniversity', {
            "id": props.university.id,
            "name": name,
            "headquarters": headquarters,
            "founded": founded,
            "website": website,
            "email": email,
            "vatNumber": vatNumber
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

    return (
        <div>

            <Card className="mt-3">
            <div className="flex justify-between">
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Name:
                            <input type="text" id="name" className={cssUnit} value={name} onChange={(e) => setName(e.target.value)} required />
                        </label> :
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
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
                    </div>
                </div>

                <div className="mx-4">
                {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Headquarters:
                            <input type="text" id="headquarters" className={cssUnit} value={headquarters} onChange={(e) => setHeadquarters(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Headquarters: {headquarters}
                        </p>}
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Founded:
                            <input type="number" id="founded" className={cssUnit} value={founded} onChange={(e) => setFounded(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Founded: {founded}
                        </p>}
                        {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Website:
                            <input type="text" id="website" className={cssUnit} value={website} onChange={(e) => setWebsite(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Website: {website}
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
                            VATNumber:
                            <input type="number" id="vatNumber" className={cssUnit} value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            VATNumber: {vatNumber}
                        </p>}
                </div>
            </Card>
        </div>

    )
}