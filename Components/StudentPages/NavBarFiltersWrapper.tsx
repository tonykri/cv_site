'use client'

import { useState } from "react"
import NavBarStudent from "./NavBarStudent"
import StudentFilters from "./StudentFilters"


export default function NavBarFiltersWrapper() {
    const [showFilters, setShowFilters] = useState(true)

    return (
        <div>
            <NavBarStudent setShowFilters={setShowFilters} />
            {showFilters && <StudentFilters setShowFilters={setShowFilters} />}
        </div>
    )
}