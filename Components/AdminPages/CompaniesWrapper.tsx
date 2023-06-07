import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CompaniesWrapper(props:any){
    const [companies, setCompanies] = useState([{
      id:""
    }]);
    const [refreshAfterDelete, setRefreshAfterDelete] = useState(true)
    const router = useRouter()

    function Refresh(){
      setRefreshAfterDelete(!refreshAfterDelete)
    }

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
      }, [props.search, refreshAfterDelete])
    return(
        <div className="container mx-auto my-5">
          {props.searchName && props.companies.map((company: { id: any; })=>(<CompanyCard key={company.id} company={company} Refresh={Refresh}/>))}
          {!props.searchName && companies.map(company=>(<CompanyCard key={company.id} company={company} Refresh={Refresh}/>))}
        </div>
    )
}