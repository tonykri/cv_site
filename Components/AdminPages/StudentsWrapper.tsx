import StudentCard from "./StudentCard";

export default function StudentsWrapper(){
    return(
        <div className="container mx-auto my-5">
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