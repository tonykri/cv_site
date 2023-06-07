'use client'
import StudentsWrapper from "@/Components/UniversityPages/StudentsWrapper";
import NavBarFiltersWrapper from "@/Components/UniversityPages/NavBarFiltersWrapper";
import { useState } from "react";


export default function Home() {
  const [department, setDepartment] = useState('All')
  const [search, setSearch] = useState(false)
  const [students, setStudents] = useState([{
    id: "",
    birthdate: ""
  }])
  const [searchName, setSearchName] = useState(false)

  function Refresh() {
    setSearch(!search)
  }

  return (
    <div>
      <NavBarFiltersWrapper setSearchName={setSearchName} setStudents={setStudents} setDepartment={setDepartment} Refresh={Refresh} />
      <StudentsWrapper students={students} searchName={searchName} department={department} search={search} />
      {/* Footer */} 
      <footer style={{ position: 'fixed', width: '100%', bottom: 0, textAlign: 'center' }}>
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
