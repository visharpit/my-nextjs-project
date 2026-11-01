import { NextResponse } from "next/server";

type Post={
    id: number;
    title: string;
    content: string;
}

let posts: Post[] = [
    {id: 1, title: "First Post", content: "This is the content of the first post."},
    {id: 2, title: "Second Post", content: "This is the content of the second post."},
    {id: 3, title: "Third Post", content: "This is the content of the third post."},
];

export async function GET() {
    return NextResponse.json(posts);
}
export async function POST(request: Request) {
    const body = await request.json();
    const newPost: Post = {
        id: posts.length + 1,
        title: body.title,
        content: body.content,
    };
    posts.push(newPost);
    return NextResponse.json({
        message: "Post created successfully",
        body: newPost,
    },{
        status: 201
    });
}   