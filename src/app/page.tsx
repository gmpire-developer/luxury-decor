import { getAllFeatures, getAllTestimonials, getTrendingProducts } from "@/lib/sanity/fetchers";
import HomePage from "@/components/shared/HomePage";

export default async function Home() {
  const [trending, features, testimonials] = await Promise.all([
    getTrendingProducts(),
    getAllFeatures(),    
    getAllTestimonials()
  ]);
  return <HomePage trending={trending} features={features} testimonials={testimonials} />;
}