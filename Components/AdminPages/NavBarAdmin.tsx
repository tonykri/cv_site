'use client'

import { Navbar, Tooltip } from "flowbite-react"
import { AiOutlineUser } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import AdminSearchForm from "./AdminSearchForm"
import { usePathname } from 'next/navigation';

import './NavBarAdmin.css'
import ThemeBtn from "../ThemeBtn"

export default function NavBarAdmin(props: any) {
    const pathname = usePathname();

    function setUser(category: string) {
        props.setUser(category)
    }

    function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="barsBG"
            >
                <Navbar.Brand className="NavBarLogo" href="/admin/home">
                    <span className=" self-center whitespace-nowrap text-xl font-semibold text-blue-600">
                        Linkedin
                    </span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {pathname === '/admin/home' ? <button type="button" onClick={() => props.setShowFilters(true)} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Filters</button> : null}
                    <div className="flex md:hidden">
                        <ThemeBtn />
                    </div>
                    <div className="md:flex hidden">
                        <AdminSearchForm setUser={setUser} />
                    </div>
                    <Navbar.Toggle />
                </div>

                
                <Navbar.Collapse>
                    <div className="visible md:hidden">
                        <AdminSearchForm />
                    </div>
                    <Navbar.Link className="mt-2 text-lg" href="/admin/profile">
                        <Tooltip content="View Profile">
                            <AiOutlineUser />
                        </Tooltip>
                    </Navbar.Link>
                    <Navbar.Link className="mt-2 text-lg" href="/admin/notifications">
                        <Tooltip content="Notifications">
                            <IoMdNotificationsOutline />
                        </Tooltip>
                    </Navbar.Link>
                    <Navbar.Link className="mt-2 text-lg" href="/" onClick={() => handleLogout()}>
                        <Tooltip content="Logout">
                            <FiLogOut />
                        </Tooltip>
                    </Navbar.Link>
                    <div className="mt-2 md:mt-0 md:flex hidden">
                        <ThemeBtn />
                    </div>

                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
