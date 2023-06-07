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

export default function NavBarFiltersWrapper() {

    const [showFilters, setShowFilters] = useState(false)
    const [showUniForm, setShowUniForm] = useState(false)
    const [user, setUser] = useState('Student')

    const [certificates, setCertificates] = useState(false)
    const [minYears, setMinYears] = useState("0")
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [search, setSearch] = useState(false)

    const [languages, setLanguages] = useState("All");
    const [industry, setIndustry] = useState("All");
    const [companySize, setCompanySize] = useState("All");
    const [maxYears, setMaxYears] = useState("100");
    const [data, setData] = useState([{
        id:"",
        birthdate: ""
    }])
    const [searchName, setSearchName] = useState(false)

    function searchAgain() {
        setSearch(!search)
    }

    
    return (
        <div>
            <NavBarAdmin setSearchName={setSearchName} setData={setData} setShowFilters={setShowFilters} setUser={setUser} />
            {showFilters && user === 'Student' && <CompanyFilters setShowFilters={setShowFilters} setCertificates={setCertificates} setMinYears={setMinYears} setSelectedLanguage={setSelectedLanguage} searchAgain={searchAgain} />}
            <div className="flex justify-end mt-2 mr-3 mb-2">
                <Button onClick={() => setShowUniForm(!showUniForm)} color={showUniForm ? "failure" : "gray"}>
                    {showUniForm ? 'Close' : 'Add University'}
                </Button>
            </div>
            {showUniForm && <AddUniversityForm />}
            {user === 'Student' && <StudentsWrapper students={data} searchName={searchName} search={search} certificates={certificates} minYears={minYears} selectedLanguage={selectedLanguage} />}
            {user === 'Company' && <CompaniesWrapper companies={data} searchName={searchName} search={search} languages={languages} industry={industry} companySize={companySize} maxYears={maxYears}/>}
            {user === 'University' && <UniversitiesWrapper universities={data} searchName={searchName} search={search}/>}
        </div>
    )
}