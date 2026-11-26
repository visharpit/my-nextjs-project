"use client"
import { useEffect, useState } from "react";

interface Todo{
  id:string,
  text: string
}

export default function Home() {
  const [todos, setTodos]= useState<Todo[]>([]);
  const [newText, setNewText] = useState<string>('');
  const [editedData, setEditedData] = useState<Todo>({id:'', text:''});

  async function fetchTodos(){
    const res = await fetch("/api/todo");
    const data = await res.json();
    setTodos(data);
  }

  useEffect(()=>{
    fetchTodos()
  }, [])

  async function handleAdd(){
     if(!newText) return;
     if(editedData.id){
      await fetch("/api/todo", {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: editedData.id, text: newText})
    }) 
      
    }else{
     await fetch("/api/todo",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text:newText})
    })
  }
  setNewText("");
  setEditedData({id: '', text: ''})
  fetchTodos()
}

  function handleUpdate(id: string, updatedText: string){
    setEditedData({id, text: updatedText})
    setNewText(updatedText)
  }

  async function handleDelete(id:string) {
    await fetch("/api/todo", {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id})
    })
    fetchTodos()
  }


  return (
    <div>
      <input type="text" onChange={(e)=>setNewText(e.target.value)} value={newText}></input>
      <button onClick={handleAdd}>Submit</button>
      <ul>
        {todos?.map((data:Todo)=>(
          <li key={data.id}>
           {data.text}
           <button onClick={()=>handleUpdate(data.id, data.text)}>Edit</button>
           <button onClick={()=>handleDelete(data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
