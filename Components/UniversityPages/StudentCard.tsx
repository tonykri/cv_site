'use client'
import axios from "axios";
import { Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillEdit, AiFillSave } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'


export default function StudentCard(props:any) {
    const [edit, setEdit] = useState(false);
    const [diplomaId, setDiplomaId] = useState(props.student.diplomaId);


    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


    function handleUpdate() {
        axios.get(`http://localhost:8080/university/editStudent/${props.student.id}/${diplomaId}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            console.log(res);
            setEdit(false);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>

            <Card className="mt-3">
                <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.student.firstname} {props.student.lastname}
                    </h5>
                    <div className="text-2xl">
                        {edit ?
                            <div className="flex gap-4">
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
                            <div onClick={() => setEdit(true)}>
                                <Tooltip content='Edit'>
                                    <AiFillEdit />
                                </Tooltip>
                            </div>}
                    </div>
                </div>

                <div className="mx-4">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Department: {props.student.department}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Birthdate: {props.student.birthdate.substring(0,10)}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: {props.student.email}
                    </p>

                    {edit ? <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            DiplomaId:
                            <input type="text" id="diplomaId" className={cssUnit} value={diplomaId} onChange={(e) => setDiplomaId(e.target.value)} required />
                        </label>
                    </div> :
                        <div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                DiplomaId: {diplomaId}
                            </p>
                        </div>}
                </div>
            </Card>
        </div>

    )
}