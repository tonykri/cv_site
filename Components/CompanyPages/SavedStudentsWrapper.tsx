'use client'

import StudentCard from "./StudentCard"


export default function SavedStudentsWrapper(){
    return(
        <div className="container mx-auto my-5 h-screen overflow-y-auto">
            <StudentCard/>
            <StudentCard/>
            <StudentCard/>
            <StudentCard/>
            <StudentCard/>
            <StudentCard/>
            <StudentCard/>
        </div>
    )
}