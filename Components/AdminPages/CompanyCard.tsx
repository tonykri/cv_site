'use client'
import axios from "axios";
import { Card, Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import Select from 'react-select';


export default function CompanyCard(props: any) {
    const [edit, setEdit] = useState(false)
    const [email, setEmail] = useState(props.company.email)
    const [name, setName] = useState(props.company.name)
    const [VATNumber, setVATNumber] = useState(props.company.vatnumber)
    const [website, setWebsite] = useState(props.company.website)
    const [headquarters, setHeadquarters] = useState(props.company.headquarters)
    const [founded, setFounded] = useState(props.company.founded)
    const [size, setSelectedSize] = useState(props.company.size)
    const [industry, setSelectedIndustry] = useState(props.company.industry)


    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    const sizes = [
        { value: "SMALL", label: "SMALL" },
        { value: "MEDIUM", label: "MEDIUM" },
        { value: "LARGE", label: "LARGE" }
    ]
    const setSize = (selected: any) => {
        setSelectedSize(selected.value);
    };

    const industries = [
        { value: "Technology", label: "Technology" },
        { value: "Telecommunications", label: "Telecommunications" },
        { value: "Healthcare", label: "Healthcare" },
        { value: "Pharmaceuticals", label: "Pharmaceuticals" },
        { value: "Retail", label: "Retail" },
        { value: "Finance", label: "Finance" },
        { value: "Energy", label: "Energy" },
        { value: "Construction", label: "Construction" },
        { value: "Education", label: "Education" },
        { value: "Transportation", label: "Transportation" },
        { value: "Media_and_Entertainment", label: "Media and Entertainment" },
        { value: "Food_and_Beverage", label: "Food and Beverage" },
        { value: "Marketing_and_Advertising", label: "Marketing and Advertising" },
        { value: "Real_Estate", label: "Real Estate" },
        { value: "Architecture_and_Design", label: "Architecture and Design" },
        { value: "Manufacturing", label: "Manufacturing" },
        { value: "Beauty_and_Personal_Care", label: "Beauty and Personal Care" },
        { value: "Travel_and_Tourism", label: "Travel and Tourism" },
        { value: "Aerospace", label: "Aerospace" },
        { value: "Hospitality", label: "Hospitality" },
        { value: "Insurance", label: "Insurance" },
        { value: "Consulting", label: "Consulting" }
    ]
    const setIndustry = (selected: any) => {
        setSelectedIndustry(selected.value);
    };

    function handleUpdate() {
        axios.post('http://localhost:8080/admin/editCompany', {
            "id": props.company.id,
            "name": name,
            "headquarters": headquarters,
            "founded": founded,
            "website": website,
            "email": email,
            "vatNumber": VATNumber,
            "size": size,
            "industry": industry
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
                            <input type="number" id="VATNumber" className={cssUnit} value={VATNumber} onChange={(e) => setVATNumber(e.target.value)} required />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            VATNumber: {VATNumber}
                        </p>}
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Size:
                            <Select
                                defaultValue={sizes[0]}
                                onChange={setSize}
                                options={sizes}
                            />                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Size: {size}
                        </p>}
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Industry:
                            <Select
                                defaultValue={industries[0]}
                                onChange={setIndustry}
                                options={industries}
                            />
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Industry: {industry}
                        </p>}
                </div>
            </Card>
        </div>

    )
}
