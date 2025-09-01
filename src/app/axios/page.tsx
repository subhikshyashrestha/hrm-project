"use client"

import  {useEffect,useState} from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}


export default function AxiosPage(){
    const [users,setUsers] = useState<User[]>([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err)=>console.error(err));
    },[]);


    return(
        <div>
            <h1>Users(Axios)</h1>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )

    }

