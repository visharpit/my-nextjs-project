import jwt from 'jsonwebtoken';

const SECRET = "MY_SECRET_KEY"; // Replace with your actual secret key

export function generateToken(payload: object){
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string){
    return jwt.verify(token, SECRET);
}