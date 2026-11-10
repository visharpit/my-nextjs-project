import {useState, useEffect} from 'react';

type User = {
    id:number,
    name:string
}

export default function HomePage(){
    const [users, setUsers]=useState<User[]>([]);
    useEffect(()=>{
        fetch('/api/users').then(res=>res.json()).then(data=>setUsers(data.user));
    },[])
    return (
        <div>
            <h1>Index Home Page</h1>
            <ul>
            {users?.map(data=>(
                <li key={data.id}>
                    {data.name}
                </li>
            ))}
            </ul>
        </div>
    )
}