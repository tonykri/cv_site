'use client'

import { Button, Dropdown, Navbar } from "flowbite-react"
import { useEffect, useState } from "react"
import { VscChromeClose } from "react-icons/vsc"
import Select from "react-select";

import './NavBarUniversity.css'
import axios from "axios";

export default function UniversityFilters(props: any) {
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [departments, setDepartments] = useState([{ value: "All", label: "All" }])

    useEffect(()=>{
        axios.get(`http://localhost:8080/departments`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            let temp = [{ value: "All", label: "All" }]
            for (const data of res.data)
                temp.push({ value: data.department, label: data.department})
            setDepartments(temp)
        })
    },[])

    function handleApply() {
        props.setDepartment(selectedDepartment);
        props.Refresh();
    }

    const setDepartment = (selected: any) => {
        setSelectedDepartment(selected.value);
    };

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="mt-1 filtersNavbar"
            >

                <div className="flex">
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Department:
                        <Dropdown
                            label={selectedDepartment}
                            dismissOnClick={true}
                            color={'gray'}
                        >
                            {departments.map((department) => (<Dropdown.Item onClick={() => setDepartment(department)}>
                                {department.label}
                            </Dropdown.Item>))}
                        </Dropdown>
                    </label>

                    <div className="mt-2 lg:mt-4">
                        <Button
                            outline={true}
                            gradientDuoTone="cyanToBlue"
                            onClick={handleApply}
                        >
                            Apply
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}