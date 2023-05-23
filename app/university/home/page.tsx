'use client'
import StudentsWrapper from "@/Components/UniversityPages/StudentsWrapper";
import NavBarFiltersWrapper from "@/Components/UniversityPages/NavBarFiltersWrapper";
import { useState } from "react";


export default function Home() {
  const [department, setDepartment] = useState('all')
  const [search, setSearch] = useState(false)

  function Refresh(){
    setSearch(!search)
  }

  return (
    <div>
      <NavBarFiltersWrapper setDepartment={setDepartment} Refresh={Refresh}/>
      <StudentsWrapper department={department} search={search}/>
    </div>
  )
}
