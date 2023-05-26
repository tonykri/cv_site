import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CompaniesWrapper(props:any){
    const [companies, setCompanies] = useState([{
      id:""
    }]);
    const router = useRouter()

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/companies`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(res => {
          console.log(res.data);
          setCompanies(res.data);
        }).catch(err => {
          console.log(err);
          router.push('/');
          alert('Error: Please try again');
        });
      }, [props.search])
    return(
        <div className="container mx-auto my-5">
          {props.searchName && props.companies.map((company: { id: any; })=>(<CompanyCard key={company.id} company={company}/>))}
          {!props.searchName && companies.map(company=>(<CompanyCard key={company.id} company={company}/>))}
        </div>
    )
}