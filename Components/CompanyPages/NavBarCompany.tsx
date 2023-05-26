'use client'

import { Navbar, Tooltip } from "flowbite-react"
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import CompanySearchForm from "./CompanySearchForm"
import { usePathname } from 'next/navigation';

import './NavBarCompany.css'
import ThemeBtn from "../ThemeBtn"

export default function NavBarCompany(props: any) {
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
                <Navbar.Brand className="NavBarLogo" href="/company/home">
                    <span className=" self-center whitespace-nowrap text-xl font-semibold text-blue-600">
                        Linkedin
                    </span>
                </Navbar.Brand>

                <div className="flex md:order-2">

                    <div className="md:flex hidden list-none">
                        <Navbar.Link href="/company/create-job-position" onClick={() => console.log()}>
                            <div className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Create job position
                            </div>
                        </Navbar.Link>
                    </div>

                    {pathname === '/company/home' ? <button type="button" onClick={() => props.setShowFilters(true)} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Filters</button> : null}
                    {/*<div className="flex md:hidden">
                        <ThemeBtn />
    </div>*/}

                    {pathname === '/company/home' && <div className="md:flex hidden">
                        <CompanySearchForm setSearchName={props.setSearchName} setStudents={props.setStudents}/>
                    </div>}
                    <Navbar.Toggle />
                </div>


                <Navbar.Collapse>
                    
                    {pathname === '/company/home' && <div className="visible md:hidden">
                        <CompanySearchForm setSearchName={props.setSearchName} setStudents={props.setStudents}/>
                    </div>}
                    <div className="visible md:hidden list-none mt-2">
                        <Navbar.Link href="/company/create-job-position" onClick={() => console.log()}>
                                Create job position
                        </Navbar.Link>
                    </div>
                    <Navbar.Link className="mt-2 text-lg" href="/company/profile">
                        <Tooltip content="View Profile">
                            <AiOutlineUser />
                        </Tooltip>
                    </Navbar.Link>
                    <Navbar.Link className="mt-2 text-lg" href="/company/notifications">
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
