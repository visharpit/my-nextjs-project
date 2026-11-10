import { useRouter } from 'next/router';

export default function BlogDetailsDynamic(){
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <h1>Blog Details Dynamic: {JSON.stringify(slug)}</h1>
        </div>
    )
}