'use client'
import CompleteCompany from "@/Components/CompleteProfile/CompleteCompany";
import CompleteStudent from "@/Components/CompleteProfile/CompleteStudent";
import { useEffect, useState } from "react";


export default function Home() {
  const [showStudent, setShowStudent] = useState(localStorage.getItem("role")==='STUDENT' ? true : false);

  useEffect(() => {
    if (typeof window !== 'undefined') 
      setShowStudent(localStorage.getItem('role')==='STUDENT' ? true : false);
  }, [])

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-4xl text-center">Complete your Profile</h1>
      {showStudent && <CompleteStudent/>}
      {!showStudent && <CompleteCompany/>}
      {/* Footer */} 
      <footer style={{ position: 'fixed', width: '100%', bottom: 0, textAlign: 'center' }}>
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
