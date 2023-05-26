'use client'
import CompaniesWrapper from "@/Components/StudentPages/CompaniesWrapper";
import NavBarFiltersWrapper from "@/Components/StudentPages/NavBarFiltersWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [languages, setLanguages] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [companySize, setCompanySize] = useState("all");
  const [maxYears, setMaxYears] = useState("100");
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState(true);

  const router = useRouter();

  useEffect(() => {
    axios.get(`http://localhost:8080/search/jobs?languages=${languages}&industry=${industry}&companySize=${companySize}&maxYears=${maxYears}`, {
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
  }, [search])

  function searchAgain(){
    setSearch(!search);
  }

  return (
    <div>
      <NavBarFiltersWrapper setJobs={setJobs} setLanguages={setLanguages} setIndustry={setIndustry} setCompanySize={setCompanySize} setMaxYears={setMaxYears} searchAgain={searchAgain}/>
      <CompaniesWrapper jobs={jobs} />
    </div>
  )
}
