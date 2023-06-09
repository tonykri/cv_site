'use client'
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function StudentsWrapper(props: any) {
  const [students, setStudents] = useState([{
    id: "",
    birthdate: ""
  }])
  const [refreshAfterDelete, setRefreshAfterDelete] = useState(true)
  const router = useRouter()

  function Refresh(){
    setRefreshAfterDelete(!refreshAfterDelete)
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/search/students/all?languages=${props.selectedLanguage}&certifications=${props.certificates ? "true" : "false"}&minYears=${props.minYears}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);
      setStudents(res.data);
    }).catch(err => {
      console.log(err);
      router.push('/');
      alert('Error: Please try again');
    });
  }, [props.search, refreshAfterDelete])
  return (
    <div className="container mx-auto my-5">
      {props.searchName && props.students.map((student: { id: any; }) => (<StudentCard key={student.id} student={student}  Refresh={Refresh}/>))}
      {!props.searchName && students.map(student => (<StudentCard key={student.id} student={student}  Refresh={Refresh}/>))}
    </div>
  )
}