import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";

export default function StudentsWrapper(props:any){
    const [students, setStudents] = useState([{
        id: "",
        birthdate: ""
    }])

    useEffect(()=>{
        axios.get(`http://localhost:8080/search/students/university?department=${props.department}`,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res=>{
            console.log(res.data);
            setStudents(res.data)
        }).catch(err=>{
            console.log(err)
        });
    },[props.search])

    return(
        <div className="container mx-auto my-5">
            {students.map(student=>(<StudentCard key={student.id} student={student}/>))}
        </div>
    )
}