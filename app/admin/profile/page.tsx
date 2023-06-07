'use client'
import NavBarAdmin from "@/Components/AdminPages/NavBarAdmin";
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import EditProfile from "@/Components/AdminPages/EditProfile";
import AdminProfileSideBar from "@/Components/AdminPages/AdminProfileSideBar";
import { useState } from "react";
import RegisterFormAdmin from "@/Components/AdminPages/RegisterFormAdmin";


export default function Home() {
  const [panel, setPanel] = useState("createAdmin")

  function setShowFilters() {
  }
  return (
    <div>
      <NavBarAdmin setShowFilters={setShowFilters} />
      <div className="flex">
        <AdminProfileSideBar setPanel={setPanel} />
        <div className="h-screen w-full">
          {panel === "createAdmin" && <RegisterFormAdmin />}
          {panel === "changePass" && <ChangePasswordForm />}
          {panel === "EditProfile" && <EditProfile />}
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
