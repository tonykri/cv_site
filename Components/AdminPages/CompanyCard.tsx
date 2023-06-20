'use client'
import axios from "axios";
import { Button, Card, Dropdown, Modal, Tooltip } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Select from 'react-select';
import { useTheme } from "next-themes";


export default function CompanyCard(props: any) {
    const [edit, setEdit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState(props.company.email)
    const [name, setName] = useState(props.company.name)
    const [VATNumber, setVATNumber] = useState(props.company.vatnumber)
    const [website, setWebsite] = useState(props.company.website)
    const [headquarters, setHeadquarters] = useState(props.company.headquarters)
    const [founded, setFounded] = useState(props.company.founded)
    const [size, setSelectedSize] = useState(props.company.size)
    const [industry, setSelectedIndustry] = useState(props.company.industry)
    const { theme } = useTheme();


    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    const sizes = [
        { value: "Small", label: "Small" },
        { value: "Medium", label: "Medium" },
        { value: "Large", label: "Large" }
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
        { value: "Consulting", label: "Consulting" },
        { value: "Navy", label: "Navy" }
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
        }, {
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

    function DeleteAccount() {
        axios.delete(`http://localhost:8080/admin/delete/${props.company.id}`, {
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

        // Define the background color based on the theme
  let backgroundColor;
  if (theme === "light") {
    backgroundColor = "rgb(203 213 225)";
  } else if (theme === "dark") {
    backgroundColor = "rgb(31 41 55)";
  } else {
    backgroundColor = "transparent";
  }

    return (
        <div>

            <Card className="mt-3" style={{ backgroundColor }}>
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
                            <Dropdown
                                label={size}
                                dismissOnClick={true}
                                color={'gray'}
                            >
                                {sizes.map((size) => (<Dropdown.Item onClick={() => setSize(size)}>
                                    {size.label}
                                </Dropdown.Item>))}
                            </Dropdown>
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Size: {size}
                        </p>}
                    {edit ?
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Industry:
                            <Dropdown
                                label={industry}
                                dismissOnClick={true}
                                color={'gray'}
                            >
                                {industries.map((industry) => (<Dropdown.Item onClick={() => setIndustry(industry)}>
                                    {industry.label}
                                </Dropdown.Item>))}
                            </Dropdown>
                        </label>
                        : <p className="font-normal text-gray-700 dark:text-gray-400">
                            Industry: {industry}
                        </p>}
                </div>
            </Card>
        </div>

    )
}
