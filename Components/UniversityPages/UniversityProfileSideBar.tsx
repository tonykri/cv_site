'use client'
import { Avatar, Button, Card, Modal, Sidebar } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import {HiOutlineExclamationCircle} from 'react-icons/hi'


export default function UniversityProfileSideBar(props: any) {
    const [showSidebar, setShowSidebar] = useState(false)
    const [showModal, setShowModal] = useState(false)

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
                                            University
                                        </h5>

                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Website:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            www.example.com
                                        </span>
                                        <span className="text-md mt-2 text-gray-700 dark:text-gray-200">
                                            Email:
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            example@gmail.com
                                        </span>
                                        
                                    </div>
                                </Card>
                            </div>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <div>
                                <div className="mb-4">
                                    <Button className="w-full" onClick={() => props.setPanel("savedCompanies")}>
                                        Statistics
                                    </Button>
                                </div>
                                <div className="mb-4">
                                    <Button className="w-full" onClick={() => props.setPanel("EditProfile")}>
                                        Edit Profile
                                    </Button>
                                </div>
                                <div className="mb-4">
                                    <Button className="w-full" onClick={() => props.setPanel("changePass")}>
                                        Change Password
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
                                                            onClick={()=>setShowModal(false)}
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
