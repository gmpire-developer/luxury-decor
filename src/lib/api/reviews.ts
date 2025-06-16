import { Review } from "@/types/review";

export async function fetchReviews(sort: string = "desc"): Promise<Review[]> {
  const res = await fetch(`/api/reviews?sort=${sort}`);
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return await res.json();
}
