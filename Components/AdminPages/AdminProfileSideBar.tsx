'use client'
import axios from "axios";
import { Avatar, Button, Card, Sidebar } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useTheme } from "next-themes";
import SidebarItemGroup from "flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup";

export default function AdminProfileSideBar(props: any) {
    const [showSidebar, setShowSidebar] = useState(false)
    const { theme } = useTheme();

    const [activePanel, setActivePanel] = useState("createAdmin");

    const handlePanelChange = (panel: any) => { 
    setActivePanel(panel);
    props.setPanel(panel);
    };

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        birthdate: ""
    })

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
            // router.push('/');
            // alert("Error: Please try again");
        });
    }, [])

// Define the background color based on the theme
  let backgroundColor;
  if (theme === "light") {
    backgroundColor = "rgb(203 213 225)";
  } else if (theme === "dark") {
    backgroundColor = "rgb(31 41 55)";
  } else {
    backgroundColor = "rgb(203 213 225)";
  }

//I have to put somewhere the background color of the sidebar (style={{ backgroundColor }}) but I don't know where

    return (
        <div className={showSidebar ? "" : "w-20"}>
            <div className={showSidebar ? "h-screen flex" : "h-screen hidden"}>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                onClick={() => setShowSidebar(false)}
                            >
                                <GiHamburgerMenu/>
                            </Sidebar.Item>
                            <div className="max-w-md">
                                <Card style={{ backgroundColor }}>
                                    <div className="flex flex-col items-center pb-10">
                                        <div className="flex flex-wrap gap-2">
                                            <Avatar rounded={true} />
                                        </div>
                                        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                                            {data.firstname} {data.lastname}
                                        </h5>

                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Email:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.email}
                                        </span>
                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Birthdate:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {data.birthdate.substring(0, 10)}
                                        </span>
                                    </div>
                                </Card>
                            </div>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <div>
                                <div className="mb-4">
                                    <Button color={activePanel === "createAdmin" ? "purple" : "blue"} className={`w-full`} onClick={() => handlePanelChange("createAdmin")}>
                                        Create Admin
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
                                

                            </div>
                        </Sidebar.ItemGroup>
                        <SidebarItemGroup>
                        <div className="mt-auto">
                            {/* Footer */} 
                            <footer className="text-center p-2 dark:text-white">
                            <div>
                                <p>© 2023 EduConnect.</p> 
                                <p>All rights reserved.</p>
                            </div>
                            </footer>
                        </div>
                        </SidebarItemGroup>
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
                                <GiHamburgerMenu/>
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>

    )
}
