"use client";

import { ProductCard } from "@/components/shared/ProductCard";
import { client } from "@/lib/sanity/client";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  images: any[];
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          slug,
          price,
          images
        }
      `;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}


// import { ProductCard } from "@/components/shared/ProductCard"

// const products = [
//   { id: 1, name: "Royal Memory Foam", image: "/images/product1.jpg", price: "₹15,999" },
//   { id: 2, name: "Luxury Spring Mattress", image: "/images/product2.jpg", price: "₹18,499" },
//   { id: 3, name: "Orthopedic Support", image: "/images/product3.jpg", price: "₹22,999" }
// ]

// export default function Products() {
//   return (
//     <main className="container mx-auto py-20 px-4">
//       <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
//       <div className="grid md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </main>
//   )
// }
