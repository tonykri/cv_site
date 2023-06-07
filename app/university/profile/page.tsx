'use client'
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import ContactAdminForm from "@/Components/ContactAdminForm";
import EditProfile from "@/Components/UniversityPages/EditProfile";
import NavBarUniversity from "@/Components/UniversityPages/NavBarUniversity";
import Statistics from "@/Components/UniversityPages/Statistics";
import UniversityProfileSideBar from "@/Components/UniversityPages/UniversityProfileSideBar";
import { useState } from "react";


export default function Home() {
  const [panel, setPanel] = useState("statistics")

  function setShowFilters() {
  }
  return (
    <div>
      <NavBarUniversity setShowFilters={setShowFilters} />
      <div className="flex">
        <UniversityProfileSideBar setPanel={setPanel}/>
        <div className="h-screen w-full">
        {panel==="statistics" && <Statistics/>}
          {panel==="changePass" && <ChangePasswordForm/>}
          {panel==="EditProfile" && <EditProfile/>}
          {panel==="ContactAdmin" && <ContactAdminForm/>}
        </div>
      </div>
      {/* Footer */} 
      <footer className="text-center p-2 dark:text-white">
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
