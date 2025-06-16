"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Testimonial } from "@/types/testimonial"
import { Feature } from "@/types/feature"
import { TrendingProduct } from "@/types/trendingProduct"

export default function HomePage({trending, features, testimonials}: {trending: TrendingProduct, features: Feature[], testimonials: Testimonial[]}) {

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#ffffff] text-gray-800">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/hero.jpg')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <motion.h1
          className="text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Home with Luxury
        </motion.h1>

        <motion.p
          className="text-lg mb-8 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Discover our premium collection of handcrafted furniture and mattresses designed for comfort, style, and lasting elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
        <Link href={"/products"}>
          <Button className="px-10 py-6 text-lg shadow-lg" size="lg">
            Shop Now
          </Button>
        </Link>
        </motion.div>

      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
              >
                <Card className="shadow-xl border-none bg-gradient-to-br from-[#f7fafc] to-[#ffffff] h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-20 px-4 bg-[#f3f4f6]">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure What’s Right For You?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            We know selecting the perfect piece can be overwhelming. Explore our curated range to find the ideal match for your home, lifestyle, and budget.
          </p>
          <Link href="/products">
            <Button size="lg" className="px-10 py-6 text-lg shadow-lg">Explore Products</Button>
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🔥 Customer Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trending.products.map((product
            ) => (
              <Card key={product._id} className="shadow-lg hover:scale-105 transition">
                <CardContent className="p-4">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src={product.bannerImage.asset.url}
                      alt={product.title}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{product.title}</h3>
                  <p className="text-green-600 font-bold mb-4">{product.price} CAD</p>
                  <Link href={`/products/${product.slug.current}`}>
                    <Button size="lg" className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Happy Customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
              >
                <p className="italic text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00b09b] to-[#96c93d] text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Living Experience?</h2>
        <Link href={"/products"}>
            <Button className="px-10 py-6 text-lg bg-white text-green-700 hover:bg-gray-200 shadow-lg" size="lg">
            Shop Now
            </Button>
        </Link>
        
      </section>

    </main>
  )
}
