'use client'

import { Button, Navbar } from "flowbite-react"
import { useEffect, useState } from "react"
import { VscChromeClose } from "react-icons/vsc"
import Select from "react-select";

import './NavBarUniversity.css'
import axios from "axios";

export default function UniversityFilters(props: any) {
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const [departments, setDepartments] = useState([{ value: "all", label: "All" }])

    useEffect(()=>{
        axios.get(`http://localhost:8080/departments`,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res=>{
            let temp = [{ value: "all", label: "All" }]
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
                className="mt-2"
            >
                <Navbar.Brand className="CloseFiltersBtn">
                    <div>
                        <VscChromeClose onClick={() => props.setShowFilters(false)} />
                    </div>
                </Navbar.Brand>
                <div className="flex">
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Department:
                        <Select
                        className="dark:text-red-900"
                            defaultValue={departments[0]}
                            onChange={setDepartment}
                            options={departments}
                        />
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