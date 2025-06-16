export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  sizes: string[];
  keyValueSpecs: { key: string, value: string }[];
  bulletSpecs: string[];
  related: number[];
}


export const products: Product[] = [
  {
    id: 1,
    slug: "royal-memory-foam",
    title: "Royal Memory Foam Mattress",
    description: "Experience ultimate comfort with our multi-layered memory foam mattress.",
    price: "₹15,999",
    images: ["/images/product1.jpg", "/images/product2.jpg", "/images/product3.jpg"],
    sizes: ["Single", "Double", "Queen", "King"],
    keyValueSpecs: [
      { key: "Warranty", value: "10 Years" },
      { key: "Material", value: "Memory Foam" },
      { key: "Delivery", value: "Free Delivery" },
      { key: "Firmness", value: "Medium Firm" }
    ],
    bulletSpecs: [
      "Breathable Cover",
      "Multi-layered Foam",
      "Orthopedic Approved"
    ],
    related: [2, 3, 4]
  },

  {
    id: 2,
    slug: "luxury-spring-mattress",
    title: "Luxury Spring Mattress",
    description: "Enjoy unmatched bounce and support with our luxury spring system.",
    price: "₹18,499",
    images: ["/images/product4.jpg", "/images/product5.jpg"],
    sizes: ["Single", "Queen", "King"],
    keyValueSpecs: [
      { key: "Warranty", value: "12 Years" },
      { key: "Material", value: "Spring with Foam Top" },
      { key: "Delivery", value: "Free Delivery" },
      { key: "Firmness", value: "Firm" }
    ],
    bulletSpecs: [
      "High-resilience spring core",
      "Anti-sag technology",
      "Hypoallergenic fabric"
    ],
    related: [1, 3, 5]
  },

  {
    id: 3,
    slug: "orthopedic-support",
    title: "Orthopedic Support Mattress",
    description: "Perfect spinal alignment for a pain-free sleep every night.",
    price: "₹22,999",
    images: ["/images/product6.jpg", "/images/product7.jpg"],
    sizes: ["Double", "Queen", "King"],
    keyValueSpecs: [
      { key: "Warranty", value: "15 Years" },
      { key: "Material", value: "High Density Foam" },
      { key: "Delivery", value: "Free Delivery" },
      { key: "Firmness", value: "Extra Firm" }
    ],
    bulletSpecs: [
      "Doctor Recommended",
      "Orthopedic Certified",
      "Posture Support"
    ],
    related: [1, 2, 4]
  },

  {
    id: 4,
    slug: "cool-gel-memory-foam",
    title: "Cool Gel Memory Foam Mattress",
    description: "Stay cool and comfortable all night long with gel-infused memory foam.",
    price: "₹19,499",
    images: ["/images/product8.jpg", "/images/product9.jpg"],
    sizes: ["Single", "Double", "Queen", "King", "Custom"],
    keyValueSpecs: [
      { key: "Warranty", value: "10 Years" },
      { key: "Material", value: "Gel Memory Foam" },
      { key: "Cooling Tech", value: "Yes" },
      { key: "Firmness", value: "Medium Soft" }
    ],
    bulletSpecs: [
      "Temperature Regulating",
      "Pressure Relief",
      "Eco-Friendly Material"
    ],
    related: [1, 3, 5]
  },

  {
    id: 5,
    slug: "premium-latex-mattress",
    title: "Premium Latex Mattress",
    description: "Natural latex comfort with bounce and breathability.",
    price: "₹24,999",
    images: ["/images/product10.jpg", "/images/product11.jpg"],
    sizes: ["Queen", "King", "Custom"],
    keyValueSpecs: [
      { key: "Warranty", value: "20 Years" },
      { key: "Material", value: "100% Natural Latex" },
      { key: "Delivery", value: "Free Delivery" },
      { key: "Firmness", value: "Medium" }
    ],
    bulletSpecs: [
      "Naturally Hypoallergenic",
      "Excellent Airflow",
      "Sustainable Material"
    ],
    related: [2, 3, 4]
  }
];

// Simple helper function to fetch product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}
