import { useEffect, useState } from "react";
import UniversityCard from "./UniversityCard";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UniversitiesWrapper(props: any) {
  const router = useRouter()
  const [universities, setUniversities] = useState([{
    id: ""
  }])
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
  }, [props.search])
  return (
    <div className="container mx-auto my-5">
      {props.searchName && props.universities.map((university: { id: any; }) => (<UniversityCard key={university.id} university={university} />))}
      {!props.searchName && universities.map(university => (<UniversityCard key={university.id} university={university} />))}
    </div>
  )
}