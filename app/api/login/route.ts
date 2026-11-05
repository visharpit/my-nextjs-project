import {NextResponse} from "next/server";
import {generateToken} from "@/lib/jwt";

export async function POST(request: Request) {
    const {email, password} = await request.json();
    if(email === "admin@test.com" && password === "12345"){
        const token = generateToken({email});
        return NextResponse.json({
            message: "Login successful",
            token,
        })
    }

    return NextResponse.json({
        message: "Invalid email or password",
    }, {status: 401});
}