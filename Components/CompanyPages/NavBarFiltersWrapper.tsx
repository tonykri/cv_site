'use client'

import { useState } from "react"
import NavBarCompany from "./NavBarCompany"
import CompanyFilters from "./CompanyFilters"
import StudentsWrapper from "../CompanyPages/StudentsWrapper"


export default function NavBarFiltersWrapper() {
    const [showFilters, setShowFilters] = useState(true)
    const [certificates, setCertificates] = useState(false)
    const [minYears, setMinYears] = useState("0")
    const [selectedLanguage, setSelectedLanguage] = useState("all");
    const [search, setSearch] = useState(false)
    const [students, setStudents] = useState([{
        id:"",
        birthdate: ""
    }])
    const [searchName, setSearchName] = useState(false)

    function searchAgain(){
        setSearch(!search)
    }

    return (
        <div>
            <NavBarCompany setSearchName={setSearchName} setStudents={setStudents} setShowFilters={setShowFilters} />
            {showFilters && <CompanyFilters setShowFilters={setShowFilters} setCertificates={setCertificates} setMinYears={setMinYears} setSelectedLanguage={setSelectedLanguage} searchAgain={searchAgain}/>}
            <StudentsWrapper students={students} searchName={searchName} search={search} certificates={certificates} minYears={minYears} selectedLanguage={selectedLanguage}/>
        </div>
    )
}