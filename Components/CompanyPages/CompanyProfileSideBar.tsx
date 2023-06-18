'use client'
import axios from "axios";
import { Avatar, Button, Card, Modal, Sidebar } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import {HiOutlineExclamationCircle} from 'react-icons/hi'
import { useRouter } from "next/navigation";


export default function CompanyProfileSideBar(props: any) {
    const [showSidebar, setShowSidebar] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [activePanel, setActivePanel] = useState("SavedStudents");

    const handlePanelChange = (panel: any) => { 
    setActivePanel(panel);
    props.setPanel(panel);
    };
    
    const [data, setData] = useState({
        name: "test",
        email: "test",
        headquarters: "test",
        vatnumber: "test"
    })

    const router = useRouter();

    useEffect(() => {
        axios.get("http://localhost:8080/profile", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(err => {
            console.log(err);
            router.push('/');
            alert("Error: Please try again");
        });
    }, [])

    function DeleteAccount(){
        axios.delete("http://localhost:8080/delete", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
            router.push('/');
            alert("Account deleted successfully");
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className={showSidebar ? "" : "w-20"}>
            <div className={showSidebar ? "h-screen flex" : "h-screen hidden"}>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                onClick={() => setShowSidebar(false)}
                            >
                                <GiHamburgerMenu />
                            </Sidebar.Item>
                            <div className="max-w-md">
                                <Card>
                                    <div className="flex flex-col items-center pb-10">
                                        <div className="flex flex-wrap gap-2">
                                            <Avatar rounded={true} />
                                        </div>
                                        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                                            {data.name}
                                        </h5>

                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Email:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.email}
                                        </span>

                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Headquarters:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.headquarters}
                                        </span>

                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            VAT Number:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.vatnumber}
                                        </span>
                                        
                                    </div>
                                </Card>
                            </div>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <div>
                            <div className="mb-4">
                                    <Button color={activePanel === "SavedStudents" ? "purple" : "blue"} className={`w-full`} onClick={() => handlePanelChange("SavedStudents")}>
                                        Saved Students
                                    </Button>
                                </div>
                                <div className="mb-4">
                                    <Button color={activePanel === "EditProfile" ? "purple" : "blue"} className={`w-full`} onClick={() => handlePanelChange("EditProfile")}>
                                        Edit Profile
                                    </Button>
                                </div>
                                <div className="mb-4">
                                    <Button color={activePanel === "changePass" ? "purple" : "blue"} className={`w-full`} onClick={() => handlePanelChange("changePass")}>
                                        Change Password
                                    </Button>
                                </div>
                                <div className="mb-4">
                                    <Button color={activePanel === "ContactAdmin" ? "purple" : "blue"} className={`w-full`} onClick={() => handlePanelChange("ContactAdmin")}>
                                        Contact Admin
                                    </Button>
                                </div>
                                <div>
                                    <React.Fragment>
                                        <Button onClick={()=>setShowModal(true)} className="w-full" color="failure">
                                        Delete Account
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
                                                        Are you sure you want to delete your account?
                                                    </h3>
                                                    <div className="flex justify-center gap-4">
                                                        <Button
                                                            color="failure"
                                                            onClick={()=>DeleteAccount()}
                                                        >
                                                            Yes, I'm sure
                                                        </Button>
                                                        <Button
                                                            color="gray"
                                                            onClick={()=>setShowModal(false)}
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
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>

                </Sidebar>

            </div>
            <div className={showSidebar ? "h-screen hidden w-2" : "h-screen flex w-2"}>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                onClick={() => setShowSidebar(true)}
                            >
                                <GiHamburgerMenu />
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>

    )
}
