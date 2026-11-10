import Link from 'next/link';
export default function BlogPage(){
    return (
        <div>
            <h1>Index Blog Page</h1>
            <ul>
                <li><Link href="/blog/1">Blog 1</Link></li>
                <li><Link href="/blog/react">React</Link></li>
                <li><Link href="/blog/next">Next</Link></li>
            </ul>
        </div>
    )
}