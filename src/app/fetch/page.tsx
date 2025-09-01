"use client"
 import React, {useEffect,useState } from "react"

 export default function fetchPage(){
    const [users,setusers] = useState <any[]>([]);
    const [loading,setloading]= useState(true);
    const [error,setError] = useState<string | null>(null);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if (!res.ok){
                throw new Error("Failed to fetch data");
            }

            return res.json();
        })
        .then((data) =>{
            setusers(data);
            setloading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setloading(false);
        });
    },[]);
    if (loading) return <p>Loading...</p>;
    if(error) return <p> Error :{error}</p>;


    return(
        <div>
            <h1> Users (Fetched from API) </h1>
            <ul>
                {users.map((user) =>(
                    <li key = {user.id}>
                        {user.name} - {user.email}
                    </li>
                    
                ))}
            </ul>

        </div>
    );
 } 

