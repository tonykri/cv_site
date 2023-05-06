'use client'

import { useState } from "react"
import NavBarAdmin from "./NavBarAdmin"
import StudentFilters from "../StudentPages/StudentFilters"
import { Button } from "flowbite-react"
import AddUniversityForm from "./AddUniversityForm"
import StudentsWrapper from "./StudentsWrapper"
import UniversitiesWrapper from "./UniversitiesWrapper"
import CompaniesWrapper from "./CompaniesWrapper"
import CompanyFilters from "../CompanyPages/CompanyFilters"
import UniversityFilters from "../UniversityPages/UniversityFilters"


export default function NavBarFiltersWrapper() {
    const [showFilters, setShowFilters] = useState(true)
    const [showUniForm, setShowUniForm] = useState(false)
    const [user, setUser] = useState('Student')
    return (
        <div>
            <NavBarAdmin setShowFilters={setShowFilters} setUser={setUser}/>
            {showFilters && user === 'Company' && <StudentFilters setShowFilters={setShowFilters} />}
            {showFilters && user === 'Student' && <CompanyFilters setShowFilters={setShowFilters} />}
            <div className="flex justify-end mt-2 mr-3 mb-2">
                <Button onClick={()=>setShowUniForm(!showUniForm)} color={showUniForm ? "failure":"gray"}>
                    {showUniForm ? 'Close':'Add University'}
                </Button>
            </div>
            {showUniForm && <AddUniversityForm/>}
            {user === 'Student' && <StudentsWrapper/>}
            {user === 'Company' && <CompaniesWrapper/>}
            {user === 'University' && <UniversitiesWrapper/>}
        </div>
    )
}