import { useRouter } from 'next/router';

export default function BlogDetails(){
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <h1>Blog Page ID: {id}</h1>
            <button onClick={()=>router.push('/blog')}>Go Back</button>
        </div>
    )
}