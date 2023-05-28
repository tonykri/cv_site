'use client'

import { Dropdown } from "flowbite-react"
import { useState } from "react"
import { usePathname, useRouter } from 'next/navigation';
import axios from "axios";

export default function AdminSearchForm(props: any) {
    const pathname = usePathname();

    const [input, setInput] = useState("")
    const [user, setUser] = useState("Student")
    const router = useRouter()

    function handleSubmit(e: any) {
        e.preventDefault()
        if (user === "Student") {
            axios.get(`http://localhost:8080/search/students/${input}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res.data);
                props.setData(res.data);
                props.setSearchName(true)
            }).catch(err => {
                console.log(err);
                router.push('/');
                alert('Error: Please try again');
            });
        } else if (user === "Company") {
            axios.get(`http://localhost:8080/search/companies/${input}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res.data);
                props.setData(res.data);
                props.setSearchName(true)
            }).catch(err => {
                console.log(err);
                router.push('/');
                alert('Error: Please try again');
            });
        } else {
            axios.get(`http://localhost:8080/search/universities/${input}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res.data);
                props.setData(res.data);
                props.setSearchName(true)
            }).catch(err => {
                console.log(err);
                router.push('/');
                alert('Error: Please try again');
            });
        }
    }

    function setCategory(category: string) {
        setUser(category)
        props.setSearchName(false)
        if (pathname === '/admin/home')
            props.setUser(category)
    }

    return (
        <form>
            <div className="flex">
                <div className="mr-2">
                    <Dropdown
                        label={user}
                        dismissOnClick={true}
                        color={'gray'}
                    >
                        <Dropdown.Item onClick={() => setCategory('Student')}>
                            Student
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setCategory("Company")}>
                            Company
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setCategory("University")}>
                            University
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="search" id="search-dropdown" className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" value={input} onChange={(e)=>setInput(e.target.value)} required />
                </div>
                <button type="submit" onClick={handleSubmit} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>
    )
}
