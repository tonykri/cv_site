'use client'

import { useState } from "react"
import NavBarAdmin from "./NavBarAdmin"
import AdminFilters from "./AdminFilters"
import { Button } from "flowbite-react"
import AddUniversityForm from "./AddUniversityForm"


export default function NavBarFiltersWrapper() {
    const [showFilters, setShowFilters] = useState(true)
    const [showUniForm, setShowUniForm] = useState(false)
    return (
        <div>
            <NavBarAdmin setShowFilters={setShowFilters} />
            {showFilters && <AdminFilters setShowFilters={setShowFilters} />}
            <div className="flex justify-end mt-2 mr-3 mb-2">
                <Button onClick={()=>setShowUniForm(!showUniForm)} color={showUniForm ? "failure":"gray"}>
                    {showUniForm ? 'Close':'Add University'}
                </Button>
            </div>
            {showUniForm && <AddUniversityForm/>}
        </div>
    )
}