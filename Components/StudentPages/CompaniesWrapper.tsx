'use client'
import CompanyCard from "./CompanyCard";

export default function CompaniesWrapper(props:any){
    
    return(
        <div className="container mx-auto my-5">
            {props.jobs.map((job: any) => (<CompanyCard key={job.id} job={job}/>))}
        </div>
    )
}