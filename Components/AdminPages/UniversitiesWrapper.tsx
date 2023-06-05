import { useEffect, useState } from "react";
import UniversityCard from "./UniversityCard";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UniversitiesWrapper(props: any) {
  const router = useRouter()
  const [universities, setUniversities] = useState([{
    id: ""
  }])
  const [refreshAfterDelete, setRefreshAfterDelete] = useState(true)

  function Refresh(){
    setRefreshAfterDelete(!refreshAfterDelete)
  }
  
  useEffect(() => {
    axios.get(`http://localhost:8080/admin/universities`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);
      setUniversities(res.data);
    }).catch(err => {
      console.log(err);
      router.push('/');
      alert('Error: Please try again');
    });
  }, [props.search, refreshAfterDelete])
  return (
    <div className="container mx-auto my-5">
      {props.searchName && props.universities.map((university: { id: any; }) => (<UniversityCard key={university.id} university={university} Refresh={Refresh}/>))}
      {!props.searchName && universities.map(university => (<UniversityCard key={university.id} university={university} Refresh={Refresh}/>))}
    </div>
  )
}