'use client'

import { useState } from "react"
import NavBarCompany from "./NavBarCompany"
import CompanyFilters from "./CompanyFilters"


export default function NavBarFiltersWrapper() {
    const [showFilters, setShowFilters] = useState(true)

    return (
        <div>
            <NavBarCompany setShowFilters={setShowFilters} />
            {showFilters && <CompanyFilters setShowFilters={setShowFilters} />}
        </div>
    )
}