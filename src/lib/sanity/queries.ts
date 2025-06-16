import groq from 'groq';

export const allProductsQuery = groq`*[_type == "product"]{
  _id,
  title,
  slug,
  description,
  price,
  images,
  sizes,
  keyValueSpecs,
  bulletSpecs
}`;

export const productBySlugQuery = (slug: string) => groq`
*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
  title,
  slug,
  description,
  price,
  images[]{asset->{url}},
  sizes,
  keyValueSpecs,
  bulletSpecs
}`;

export const allTestimonialsQuery = groq`*[_type == "testimonial"]{_id, name, quote}`;
export const allFAQsQuery = groq`*[_type == "faq"]{_id, question, answer}`;
export const contactQuery = groq`*[_type == "contact"][0]{
  _id, address, phone, email, googleMapUrl, socialLinks
}`;
// Fetch all features
export const featuresQuery = groq`*[_type == "feature"] | order(_createdAt asc) {_id, icon, title, description}`;
export const trendingProductsQuery = `
*[_type == "trendingProduct"][0]{
  _id,
  title,
  products[]->{
    _id,
    title,
    slug,
    price,
    bannerImage{
      asset->{
        url
      }
    }
  }
}
`
