'use client'

import axios from "axios"
import { useEffect, useState } from "react"


export default function Statistics() {
    const [percentage, setPercentage] = useState(0.00)  

    useEffect(()=>{
        axios.get(`http://localhost:8080/university/statistics`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
            setPercentage(res.data)
        }).catch(err => {
            console.log(err)
        });
    },[])

    return (
        <div className="w-full h-full justify-center items-center">
            <h1 className="text-4xl mt-4 text-center">Statistics</h1>
            <div className="h-screen mt-2 justify-center items-center flex">
                <h1 className="text-xl">Unemployment rate:</h1>
                <div>
                    <input type="range" min={0} max={100} value={percentage} disabled/>  {percentage}%
                </div>
            </div>

        </div>
    )
}