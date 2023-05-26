'use client'
import axios from "axios";
import { Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";


export default function StudentCard(props: any) {
    const [edit, setEdit] = useState(false)
    const [firstname, setFirstname] = useState(props.student.firstname)
    const [lastname, setLastname] = useState(props.student.lastname)
    const [department, setDepartment] = useState(props.student.department)
    const [birthdate, setBirthdate] = useState(props.student.birthdate)
    const [email, setEmail] = useState(props.student.email)
    const [university, setUniversity] = useState(props.student.university)
    const [languages, setLanguages] = useState(props.student.languages)

    function handleUpdate() {
        axios.post('http://localhost:8080/admin/editStudent', {
            "id": props.student.id,
            "firstname": firstname,
            "lastname": lastname,
            "birthdate": birthdate,
            "email": email,
            "languages": languages
        },{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
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
                        University: {university}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Department: {department}
                    </p>
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Birthdate:
                            <input type="date" id="birthdate" className={cssUnit} onChange={(e) => setBirthdate(e.target.value)} required />
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
                </div>
            </Card>
        </div>

    )
}
