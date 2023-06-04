'use client'
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import CompanyProfileSideBar from "@/Components/CompanyPages/CompanyProfileSideBar";
import NavBarCompany from "@/Components/CompanyPages/NavBarCompany";
import SavedStudentsWrapper from "@/Components/CompanyPages/SavedStudentsWrapper";
import CompleteCompany from "@/Components/CompleteProfile/CompleteCompany";
import ContactAdminForm from "@/Components/ContactAdminForm";
import { useState } from "react";


export default function Home() {
  const [panel, setPanel] = useState("SavedStudents")

  function setShowFilters() {
  }
  return (
    <div>
      <NavBarCompany setShowFilters={setShowFilters} />
      <div className="flex">
        <CompanyProfileSideBar setPanel={setPanel}/>
        <div className="h-screen w-full">
        {panel==="SavedStudents" && <SavedStudentsWrapper/>}
          {panel==="changePass" && <ChangePasswordForm/>}
          {panel==="EditProfile" && <CompleteCompany/>}
          {panel==="ContactAdmin" && <ContactAdminForm/>}
        </div>
      </div>
      {/* Footer */} 
      <footer style={{ position: 'fixed', width: '100%', bottom: 0, textAlign: 'center' }}>
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
