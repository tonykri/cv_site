'use client'

import { useState } from "react"
import NavBarStudent from "./NavBarStudent"
import StudentFilters from "./StudentFilters"


export default function NavBarFiltersWrapper(props:any) {
    const [showFilters, setShowFilters] = useState(true)


    return (
        <div>
            <NavBarStudent setJobs={props.setJobs} setShowFilters={setShowFilters} />
            {showFilters && <StudentFilters searchAgain={props.searchAgain} setShowFilters={setShowFilters} setLanguages={props.setLanguages} setIndustry={props.setIndustry} setCompanySize={props.setCompanySize} setMaxYears={props.setMaxYears}/>}
        </div>
    )
}