"use client";
import {useState, useEffect} from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Get & Create Post</h1>
      <button onClick={getData}>Get Data</button><br/>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
      <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} /><br/>
      <button onClick={postData}>Post Data</button>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
