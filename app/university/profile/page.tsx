'use client'
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import ContactAdminForm from "@/Components/ContactAdminForm";
import EditProfile from "@/Components/UniversityPages/EditProfile";
import NavBarUniversity from "@/Components/UniversityPages/NavBarUniversity";
import UniversityProfileSideBar from "@/Components/UniversityPages/UniversityProfileSideBar";
import { useState } from "react";


export default function Home() {
  const [panel, setPanel] = useState("savedCompanies")

  function setShowFilters() {
  }
  return (
    <div>
      <NavBarUniversity setShowFilters={setShowFilters} />
      <div className="flex">
        <UniversityProfileSideBar setPanel={setPanel}/>
        <div className="h-screen w-full">
          {panel==="changePass" && <ChangePasswordForm/>}
          {panel==="EditProfile" && <EditProfile/>}
          {panel==="ContactAdmin" && <ContactAdminForm/>}
        </div>
      </div>
    </div>
  )
}
