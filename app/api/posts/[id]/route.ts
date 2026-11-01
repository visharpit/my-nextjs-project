import {NextResponse} from "next/server";
import {posts} from "../../../lib/posts";

//Get API based on id
export async function GET(request: Request,
    {params}: {params:Promise<{id: string}>}) {
    const {id} = await params;
    const post = posts.find((post) => post.id === parseInt(id));
    if(!post){
        return NextResponse.json({message: "Post not found"},{
            status: 404
        });
    }
    return NextResponse.json(post,{
        status: 200});
    }

//Patch API based on id
export async function PATCH(request: Request,
    {params}: {params:Promise<{id: string}>}) {
    const {id} = await params;
    const body = await request.json();
    const postId = Number(id);
    const postIndex = posts.findIndex((post) => post.id === postId);
    if(postIndex === -1){
        return NextResponse.json({message: "Post not found"},{
            status: 404
        });
    }
    if(body.title !== undefined){
        posts[postIndex].title = body.title;
    }
    if(body.content !== undefined){
        posts[postIndex].content = body.content;
    }
    return NextResponse.json({
        message: "Post updated successfully",
        data: posts[postIndex]
    },{
        status: 200
    });
}

//PUT API based on id
export async function PUT(request: Request,
    {params}: {params:Promise<{id: string}>}) {
    const {id} = await params;
    const body = await request.json();
    const postId = Number(id);
    const postIndex = posts.findIndex((post) => post.id === postId);
    if(postIndex === -1){
        return NextResponse.json({message: "Post not found"},{
            status: 404
        });
    }
    if(body.title === undefined || body.content === undefined){
        return NextResponse.json({message: "Title and content are required"},{
            status: 400
        });
    }
    posts[postIndex]={
        id: postId,
        title: body.title,
        content: body.content   
    }
    return NextResponse.json({
        message: "Post updated successfully",
        data: posts[postIndex]
    },{
        status: 200
    });
}

//Delete API based on id
export async function DELETE(request: Request,
    {params}: {params:Promise<{id: string}>}) {
    const {id} = await params;
    const postId = Number(id);
    const postIndex = posts.findIndex((post) => post.id === postId);
    if(postIndex === -1){
        return NextResponse.json({message: "Post not found"},{
            status: 404
        });
    }
    const deletedPost = posts.splice(postIndex, 1);
    return NextResponse.json({
        message: "Post deleted successfully",
        data: deletedPost[0]
    },{
        status: 200
    });
}
