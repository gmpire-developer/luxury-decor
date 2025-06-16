import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    price: number;
    slug: { current: string };
    images: any[];
  };
}

export function ProductCard({ product }: { product: ProductCardProps['product'] }) {
  return (
    <Card className="shadow-lg hover:scale-105 transition">
      <CardContent className="p-4">
        <Image
          src={urlFor(product.images[0]).width(400).url()}
          alt={product.title}
          width={400}
          height={300}
          className="rounded-md mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">{product.title}</h3>
        <p className="text-green-600 font-bold mb-4">{product.price} CAD</p>
        <Link href={`/products/${product.slug.current}`}>
          <Button size="lg" className="w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
