'use client'

import axios from "axios";
import { Button } from "flowbite-react"
import { AiOutlineClose } from 'react-icons/ai'

export default function DepartmentBtn(props: any) {

    function DeleteDepartment(id: string){
        axios.get(`http://localhost:8080/university/deleteDepartment/${id}`,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res=>{
            console.log(res.data);
            props.Refresh()
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <Button
            color="gray"
            pill={true}
            disabled
            className="cursor-pointer"
        >
            <div className="flex gap-4">
                {props.department.department}
                <div className="mt-1" onClick={() => DeleteDepartment(props.department.id)}><AiOutlineClose /></div>
            </div>

        </Button>
    )
}