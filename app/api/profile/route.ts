import {NextResponse} from "next/server";
import {verifyToken} from "@/lib/jwt";

export async function GET(request: Request) {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
        return NextResponse.json({
            message: "Unauthorized: No token provided",
        }, {status: 401});
    }
    const token  = authHeader.split(" ")[1]; // Assuming the token is sent as "Bearer <token>"
    try{
        const user = verifyToken(token);
        return NextResponse.json({
            message: 'Protected data',
            user,
        });

    }catch(error){
        return NextResponse.json({
            message: "Unauthorized: Invalid token",
        }, {status: 401});
    }

}