'use client'
import CompleteCompany from "@/Components/CompleteProfile/CompleteCompany";
import CompleteStudent from "@/Components/CompleteProfile/CompleteStudent";
import { useState } from "react";


export default function Home() {
  const [showStudent, setShowStudent] = useState(false)

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-4xl text-center">Complete your Profile</h1>
      {showStudent && <CompleteStudent/>}
      {!showStudent && <CompleteCompany/>}
    </div>
  )
}
