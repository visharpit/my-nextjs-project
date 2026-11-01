import Link from "next/link";
import { products } from "../lib/products";

type Product = {
    searchParams: Promise<{
        category?: string;
        page?: string;
    }>;
}

const PAGE_SIZE = 3;

export default async function ProductsPage({ searchParams }: Product) {
    const { category, page } = await searchParams;
    let filtered = products;
    if(category) {
        filtered = filtered.filter((product) => product.category === category);
    }

    const currentPage = Number(page) || 1;
    console.log("Current Page:", currentPage, page);
    const start = (currentPage - 1) * PAGE_SIZE;
    console.log("Start Index:", start);
    const paginated = filtered.slice(start, start + PAGE_SIZE);
    console.log("Paginated Products:", paginated);
    return (
        <div>
            <h1>
                Products Page
            </h1>
            <div className="flex gap-4 color-blue-500 underline">
                <Link href="/products">All</Link>
                <Link href="/products?category=react">React</Link>
                <Link href="/products?category=next">Next</Link>
                <Link href="/products?category=node">Node</Link>
            </div>
            <ul>
                {paginated.map((p) => (
                    <li key={p.id}>{p.name}-{p.category}</li>
                ))}
            </ul>
            <div className="flex gap-4 color-blue-500 underline">
                {currentPage > 1 && (
                    <Link href={`/products?category=${category || ""}&page=${currentPage - 1}`}>
                        Previous
                    </Link> 
                )}
                {start + PAGE_SIZE < filtered.length && (
                    <Link href={`/products?category=${category || ""}&page=${currentPage + 1}`}>
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}