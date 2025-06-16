import { client } from './client';
import * as queries from './queries';
import { Product } from '@/types/product';
import { Testimonial } from '@/types/testimonial';
import { FAQ } from '@/types/faq';
import { Contact } from '@/types/contact';
import { TrendingProduct } from '@/types/trendingProduct';
import { Review } from '@/types/review';
import { RatingStats } from '@/types/rating';

export async function getAllProducts(): Promise<Product[]> {
  return await client.fetch(queries.allProductsQuery);
}

export async function getProduct(slug: string): Promise<Product> {
  return await client.fetch(queries.productBySlugQuery(slug));
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return await client.fetch(queries.allTestimonialsQuery);
}

export async function getAllFAQs(): Promise<FAQ[]> {
  return await client.fetch(queries.allFAQsQuery);
}

export async function getContact(): Promise<Contact> {
  return await client.fetch(queries.contactQuery);
}

export async function getAllFeatures() {
  return await client.fetch(queries.featuresQuery);
}

export async function getTrendingProducts(): Promise<TrendingProduct> {
  return await client.fetch(queries.trendingProductsQuery);
}
