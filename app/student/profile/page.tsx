'use client'
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import EditProfile from "@/Components/StudentPages/EditProfile";
import NavBarStudent from "@/Components/StudentPages/NavBarStudent";
import StudentProfileSideBar from "@/Components/StudentPages/StudentProfileSideBar";
import { useState } from "react";


export default function Home() {
  const [panel, setPanel] = useState("savedCompanies")

  function setShowFilters() {
  }
  return (
    <div>
      <NavBarStudent setShowFilters={setShowFilters} />
      <div className="flex">
        <StudentProfileSideBar setPanel={setPanel}/>
        <div className="h-screen w-full">
          {panel==="changePass" && <ChangePasswordForm/>}
          {panel==="EditProfile" && <EditProfile/>}
        </div>
      </div>
    </div>
  )
}
