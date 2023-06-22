'use client'

import { Navbar, Tooltip } from "flowbite-react"
import { AiOutlineUser } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import AdminSearchForm from "./AdminSearchForm"
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";

import './NavBarAdmin.css'
import ThemeBtn from "../ThemeBtn"
import { useState } from "react"

export default function NavBarAdmin(props: any) {
    const pathname = usePathname();
    const [category, setCategory] = useState("Student");
    const { theme } = useTheme();

    function setUser(category: string) {
        props.setUser(category)
        setCategory(category)
    }

    function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    const handleClick = () => {
        props.setShowFilters((prevState: boolean) => !prevState);
    };

    let backgroundImage;
    if (theme === "light") {
      backgroundImage = '/EduConnect_LightTheme.png';
    } else if (theme === "dark") {
      backgroundImage = '/EduConnect_DarkTheme.png';
    } else {
        backgroundImage = '/EduConnect_LightTheme.png';
    }

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="barsBG"
            >
                <Navbar.Brand className="NavBarLogo" href="/admin/home">
                    <img src={ backgroundImage } alt={"logo"} width={120} height={60}/>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {pathname === '/admin/home' && category === "Student" ? <button type="button" onClick={handleClick} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Filters</button> : null}
                    {<div className="flex md:hidden">
                        <ThemeBtn />
                    </div>}
                    {pathname === '/admin/home' && <div className="md:flex hidden">
                        <AdminSearchForm setSearchName={props.setSearchName} setData={props.setData} setUser={setUser} />
                    </div>}
                    <Navbar.Toggle />
                </div>


                <Navbar.Collapse>
                    {pathname === '/admin/home' && <div className="visible md:hidden">
                        <AdminSearchForm setSearchName={props.setSearchName} setData={props.setData} setUser={setUser} />
                    </div>}
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
                    {<div className="mt-2 md:mt-0 md:flex hidden">
                        <ThemeBtn />
                    </div>}

                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
