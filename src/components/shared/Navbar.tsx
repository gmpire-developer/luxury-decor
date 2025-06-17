"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Luxury Decor Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-green-600">Luxury Decor</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/products" className="hover:text-green-600 transition">Products</Link>
          <Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
          <Link href="/reviews" className="hover:text-green-600 transition">Reviews</Link>
          <Link href="/faq" className="hover:text-green-600 transition">FAQ</Link>
          <Link href="/contact">
            <Button className="px-6 py-4 text-sm shadow-sm" size="sm">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button size="icon" variant="outline" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button size="sm" className="px-6">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
