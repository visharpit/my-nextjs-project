import { NextResponse } from "next/server";

let todos = [
    {id: "1", text: "text number 1"},
    {id: "2", text: "text number 2"},
    {id: "3", text: "text number 3"}
]

export async function GET(){
    return NextResponse.json(todos);
}

export async function POST(request: Request) {
    const {text} = await request.json();
    if(!text?.trim()){
        return NextResponse.json({error: "Text is required"}, {status: 400})
    }
    const newTodo = {id: crypto.randomUUID(), text: text.trim()};
    todos.push(newTodo);
    return NextResponse.json(newTodo, {status: 201})
}

export async function PUT(request: Request) {
    const {id, text} = await request.json();
    const todo = todos.find(data=> data.id === id);
    if(!todo || !text?.trim()){
        return NextResponse.json({error: "Invalid data"}, {status: 400})
    }
    todo.text = text?.trim();
    return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
    const {id} = await request.json();
    const todo = todos.find(data=> data.id === id);
    if(!todo){
        return NextResponse.json({error: "Record not found"}, {status: 400})
    }
     todos = todos.filter(data=> data.id !== todo?.id);
    return NextResponse.json({deletedData: todo});
}