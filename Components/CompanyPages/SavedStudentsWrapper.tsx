'use client'

import { useEffect, useState } from "react"
import StudentCard from "./StudentCard"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function SavedStudentsWrapper(){
    const [students, setStudents] = useState([{
        id: "",
        birthdate: ""
    }])
    const router = useRouter()

    useEffect(()=>{
        axios.get('http://localhost:8080/viewSaved/students',{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            setStudents(res.data)
        }).catch(err => {
            console.log(err)
            router.push('/')
            alert('Error: Please try again')
        })
    },[])

    return(
        <div className="container mx-auto my-5 h-screen">
            {students.length===0 && <div className="w-full h-full flex justify-center">
                <h1 className="text-2xl text-center mt-4">No saved students</h1>
                </div>}
            {students.map(student =>(<StudentCard key={student.id} student={student}/>))}
        </div>
    )
}