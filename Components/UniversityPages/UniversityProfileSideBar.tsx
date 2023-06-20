'use client'
import axios from "axios";
import { Avatar, Button, Card, Sidebar } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'


export default function UniversityProfileSideBar(props: any) {
    const [showSidebar, setShowSidebar] = useState(false)

    const [activePanel, setActivePanel] = useState("statistics");

    const handlePanelChange = (panel: any) => { 
    setActivePanel(panel);
    props.setPanel(panel);
    };

    const [data, setData] = useState({
        name: "test",
        email: "test",
        headquarters: "test",
        vatNumber: "test"
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
                                            Headquarters:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.headquarters}
                                        </span>
                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Email:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.email}
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
                                    <Button color={activePanel === "statistics" ? "purple" : "blue"} className={`w-full`} onClick={() => handlePanelChange("statistics")}>
                                        Statistics
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

                            </div>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>

                </Sidebar>

            </div>
            <div className={showSidebar ? "h-screen hidden w-2" : "h-screen flex w-15"}>
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
