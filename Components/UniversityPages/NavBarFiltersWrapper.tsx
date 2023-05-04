'use client'

import { useState } from "react"
import NavBarUniversity from "./NavBarUniversity"
import UniversityFilters from "./UniversityFilters"


export default function NavBarFiltersWrapper() {
    const [showFilters, setShowFilters] = useState(true)

    return (
        <div>
            <NavBarUniversity setShowFilters={setShowFilters} />
            {showFilters && <UniversityFilters setShowFilters={setShowFilters} />}
        </div>
    )
}