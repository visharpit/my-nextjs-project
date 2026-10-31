import { getPostBySlug } from "../../lib/posts";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) {
        return {
            title: "Post not found",
        }
    }
    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
        }

    }
}

export default async function PostPage({params}: Props) {
    const {slug} = await params;
    const post = await getPostBySlug(slug);

    if(!post){
        return<h1>Post Not Found</h1>
    }
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.content}</p>
            <Link href='/blog'>Back to Blog</Link>
        </div>
    )
}

