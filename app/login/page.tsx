"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function handleLogin() {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        });
        if(response.ok) {
            router.push('/dashboard');
        }else{
            alert('Invalid credentials');
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="email"
                   placeholder="Email"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email} />
            <input type="password"
                   placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)}
                   value={password} />
                   <button onClick={handleLogin}>Login</button>
        </div>
    )
}