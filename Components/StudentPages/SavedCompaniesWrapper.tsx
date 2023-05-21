'use client'
import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SavedCompaniesWrapper(){

    const [jobs, setJobs] = useState([]);
  
    const router = useRouter();
  
    useEffect(() => {
      axios.get(`http://localhost:8080/viewSaved/jobs`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        setJobs(res.data);
      }).catch(err => {
        console.log(err);
        router.push('/');
        alert('Error: Please try again');
      });
    }, [])
    return(
        <div className="container mx-auto my-5 h-screen overflow-y-auto">
          {jobs.length===0 && <div className="w-full h-full flex justify-center">
                <h1 className="text-2xl text-center mt-4">No saved job offers</h1>
                </div>}
            {jobs.map((job:any) =>(<CompanyCard key={job.id} job={job}/>))}
        </div>
    )
}