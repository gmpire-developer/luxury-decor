"use client";

import { useEffect, useState } from "react";
import AddReviewForm from "@/components/shared/AddReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import { Review } from "@/types/review";
import { RatingStats } from "@/types/rating";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<RatingStats>({ average: 0, total: 0 });
  const [sort, setSort] = useState<string>("latest");

  const fetchReviews = async (sortOption = sort) => {
    try {
      const res = await fetch(`/api/reviews?sort=${sortOption}`);
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/reviews?type=stats");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
    fetchStats();
  }, []);

  const handleSortChange = async (newSort: string) => {
    setSort(newSort);
    fetchReviews(newSort);
  };

  const handleReviewAdded = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
    fetchStats();
  };

  return (
    <div className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
        What Our Users Say
      </h1>

      <div className="text-center text-lg font-medium">
        ⭐ {stats.average} / 5 ({stats.total} Reviews)
      </div>

      <AddReviewForm onReviewAdded={handleReviewAdded} />

      {/* Dropdown for sorting */}
      <div className="flex justify-center my-4">
        <select
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="latest">Latest</option>
          <option value="best">Best</option>
          <option value="worst">Worst</option>
        </select>
      </div>

      <ReviewList reviews={reviews} />
    </div>
  );
}
