"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    async function handleClick() {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        const data = await res.json();
        if(data.token){
            localStorage.setItem("token", data.token);
            router.push("/dashboard");
        }else{
            alert(data.message);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
