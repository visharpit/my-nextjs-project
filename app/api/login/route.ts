import {NextResponse} from 'next/server';

export async function POST(request: Request) {
    const {email, password} = await request.json();
    if(email === 'admin@test.com' && password === '1234') {
        const response =  NextResponse.json({message: 'Login successful'}, {status: 200});
        //set auth cookie here
        response.cookies.set('auth', 'true', {httpOnly: true, path: '/'});
        return response;
    }

    return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
}