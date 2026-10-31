export type Post = {
    slug: string;
    title: string;
    description: string;
    content: string;
};

export const posts: Post[] = [
    {
        slug: "learn-nextjs",
        title: "Learn Next.js",
        description: "Next js description",
        content: "Next js content"
    },
    {
        slug: "learn-reactjs",
        title: "Learn React.js",
        description: "React js description",
        content: "React js content"
    },
    {
        slug: "learn-nodejs",
        title: "Learn Node.js",
        description: "Node js description",
        content: "Node js content"
    }
]

export function getPosts(){
    return posts;
}

export function getPostBySlug(slug:String):Post | undefined {
    return posts.find(post=>post.slug === slug);
}