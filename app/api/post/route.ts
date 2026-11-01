import { NextResponse } from "next/server";

const posts = [
    {id:1, title: "Post 1"},
    {id:2, title: "Post 2"},
    {id:3, title: "Post 3"}
]

export async function GET(){
    return NextResponse.json(posts);
}
