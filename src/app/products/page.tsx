import React from 'react';

interface Product {
    id: number;
    title: string;
    description: string;
}

const Page = async () => {
    const res = await fetch('https://dummyjson.com/products', { cache: "no-store" });
    const data = await res.json();
    const products: Product[] = data.products;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
            <h3 className="mb-4 text-center">{new Date().toTimeString()}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products?.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4 border">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
