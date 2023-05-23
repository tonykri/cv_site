'use client'

import { Navbar, Tooltip } from "flowbite-react"
import { AiOutlineUser } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import UniversitySearchForm from "./UniversitySearchForm"
import { usePathname } from 'next/navigation';

import './NavBarUniversity.css'
import ThemeBtn from "../ThemeBtn"
import { IoIosNotificationsOutline } from "react-icons/io"

export default function NavBarUniversity(props: any) {
    const pathname = usePathname();

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
                <Navbar.Brand className="NavBarLogo" href="/university/home">
                    <span className=" self-center whitespace-nowrap text-xl font-semibold text-blue-600">
                        Linkedin
                    </span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {pathname === '/university/home' ? <button type="button" onClick={() => props.setShowFilters(true)} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Filters</button> : null}
                    {/*<div className="flex md:hidden">
                        <ThemeBtn />
    </div>*/}

                    <div className="md:flex hidden">
                        <UniversitySearchForm />
                    </div>
                    <Navbar.Toggle />
                </div>


                <Navbar.Collapse>
                    <div className="visible md:hidden">
                        <UniversitySearchForm />
                    </div>
                    <Navbar.Link className="mt-2 text-lg" href="/university/profile">
                        <Tooltip content="View Profile">
                            <AiOutlineUser />
                        </Tooltip>
                    </Navbar.Link>
                    <Navbar.Link className="mt-2 text-lg" href="/university/notifications">
                        <Tooltip content="Notifications">
                            <IoIosNotificationsOutline />
                        </Tooltip>
                    </Navbar.Link>
                    <Navbar.Link className="mt-2 text-lg" href="/" onClick={() => handleLogout()}>
                        <Tooltip content="Logout">
                            <FiLogOut />
                        </Tooltip>
                    </Navbar.Link>
                    {/*<div className="mt-2 md:mt-0 md:flex hidden">
                        <ThemeBtn />
    </div>*/}

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
