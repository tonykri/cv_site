'use client'

import { useState } from "react"
import NavBarUniversity from "./NavBarUniversity"
import UniversityFilters from "./UniversityFilters"


export default function NavBarFiltersWrapper(props:any) {
    const [showFilters, setShowFilters] = useState(true)

    return (
        <div>
            <NavBarUniversity setShowFilters={setShowFilters} />
            {showFilters && <UniversityFilters setShowFilters={setShowFilters} setDepartment={props.setDepartment} Refresh={props.Refresh}/>}
        </div>
    )
}