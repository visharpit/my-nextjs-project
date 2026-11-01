"use client";
import {useState, useEffect} from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  async function getData() {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  }
  async function postData() {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    getData();
  }
  
  async function patchData() {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content }),
    });
    setId("");
    setTitle("");
    setContent("");
    getData();
  }

  async function putData() {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content }),
    }); 
    setTitle("");
    setContent("");
    setId("");
    getData();
  }

  async function deleteData() {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    setId("");
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Get, Patch, Delete & Post</h1>
      <button onClick={getData}>Get Data</button><br/>
      <input type="text" placeholder="Id(PUT & PATCH)" value={id} onChange={(e) => setId(e.target.value)} /><br/>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
      <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} /><br/>
      <button onClick={postData}>Post Data</button>
      <button onClick={patchData}>Patch Data</button>
      <button onClick={putData}>Put Data</button>
      <button onClick={deleteData}>Delete Data</button>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}