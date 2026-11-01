export default async function Home() {
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();

  return (
   <div>
    <h1>Posts</h1>
    <ul>
      {posts.map((post: { id: number; title: string })=>(
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
   </div>
  );
}
