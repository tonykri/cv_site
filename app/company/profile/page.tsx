'use client'
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import CompanyProfileSideBar from "@/Components/CompanyPages/CompanyProfileSideBar";
import NavBarCompany from "@/Components/CompanyPages/NavBarCompany";
import CompleteCompany from "@/Components/CompleteProfile/CompleteCompany";
import { useState } from "react";


export default function Home() {
  const [panel, setPanel] = useState("savedCompanies")

  function setShowFilters() {
  }
  return (
    <div>
      <NavBarCompany setShowFilters={setShowFilters} />
      <div className="flex">
        <CompanyProfileSideBar setPanel={setPanel}/>
        <div className="h-screen w-full">
          {panel==="changePass" && <ChangePasswordForm/>}
          {panel==="EditProfile" && <CompleteCompany/>}
        </div>
      </div>
    </div>
  )
}
