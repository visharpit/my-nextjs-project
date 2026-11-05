"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            alert("No token found, please login first.");
            return;
        }else{
            fetch("/api/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res=> res.json())
            .then(data=> setUser(data))
        }
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}