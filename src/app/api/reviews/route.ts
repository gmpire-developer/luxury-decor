import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "reviews";
    const sort = searchParams.get("sort") || "latest";

    if (type === "stats") {
      const statsQuery = `*[_type == "review"].rating`;
      const ratings: number[] = await client.fetch(statsQuery);
      const total = ratings.length;
      const sum = ratings.reduce((acc, curr) => acc + curr, 0);
      const average = total > 0 ? parseFloat((sum / total).toFixed(1)) : 0;
      return NextResponse.json({ total, average });
    }

    let sortClause = "createdAt desc";
    if (sort === "best") sortClause = "rating desc, createdAt desc";
    else if (sort === "worst") sortClause = "rating asc, createdAt desc";

    const reviewsQuery = `
      *[_type == "review"] | order(${sortClause}) {
        _id,
        name,
        rating,
        comment,
        createdAt
      }
    `;
    const reviews = await client.fetch(reviewsQuery);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("API GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, rating, comment } = await req.json();
    const newReview = {
      _type: "review",
      name,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };
    const result = await client.create(newReview);
    return NextResponse.json({ success: true, review: result });
  } catch (error) {
    console.error("API POST Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create review" }, { status: 500 });
  }
}
