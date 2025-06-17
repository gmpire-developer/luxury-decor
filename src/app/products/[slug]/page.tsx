"use client";

import { useParams, notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { getProduct } from "@/lib/sanity/fetchers";
import { Product } from "@/types/product";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(slug);
      if (!data) {
        notFound();
      }
      setProduct(data);
    };
    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const nextImage = () => setCurrentImage((currentImage + 1) % product.images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + product.images.length) % product.images.length);

  return (
    <main className="min-h-screen pt-28 px-4 bg-gradient-to-b from-[#f0f4f8] to-[#ffffff] text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 relative">
            <Image
              src={product.images[currentImage].asset.url ?? ""}
              alt={product.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            <ChevronLeft />
          </button>
          <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            <ChevronRight />
          </button>
          <div className="flex space-x-2 mt-4 justify-center">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img.asset.url ?? ""}
                alt=""
                width={80}
                height={80}
                className={`rounded-md cursor-pointer border-2 ${index === currentImage ? "border-green-500" : "border-transparent"}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <div className="text-3xl font-semibold text-green-600">{product.price} CAD</div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Available Sizes:</h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <span key={size} className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Specifications:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.keyValueSpecs?.map((spec, index) => (
                <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-md">
                  <span className="font-medium">{spec.key}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>

            {product.bulletSpecs?.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.bulletSpecs.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6">
            <Button size="lg" className="px-10 py-6 text-lg shadow-lg">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
