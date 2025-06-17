"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Review } from "@/types/review";

interface Props {
  onReviewAdded: (newReview: Review) => void;
}

export default function AddReviewForm({ onReviewAdded }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasSubmitted(!!sessionStorage.getItem("reviewSubmitted"));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ name, rating, comment }),
    });

    if (res.ok) {
      const result = await res.json();
      onReviewAdded(result.review);
      sessionStorage.setItem("reviewSubmitted", "true");
      setHasSubmitted(true);
      setIsOpen(false);
    } else {
      alert("Failed to submit review");
    }
    setLoading(false);
  };

  if (hasSubmitted) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded text-center font-medium shadow">
        Thanks for your honest review.
      </div>
    );
  }

  return (
    <div className="mb-8 flex justify-center">
      <div className="w-full max-w-xl">
        <div className="flex justify-center mb-4">
          <button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-8 rounded-full shadow-lg hover:scale-105 transition font-semibold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Cancel" : "Write a Review ✍️"}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded bg-white shadow-lg">
                <div>
                  <label className="block font-medium mb-1">Name:</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="border p-3 w-full rounded focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Rating (1-5):</label>
                  <input type="number" value={rating} onChange={(e) => setRating(+e.target.value)} min="1" max="5" className="border p-3 w-full rounded focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Comment:</label>
                  <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="border p-3 w-full rounded focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <button disabled={loading} type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 font-medium">
                  {loading ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
