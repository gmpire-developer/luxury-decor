import { Review } from "@/types/review";

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  const renderStars = (count: number) => (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg key={idx} className={`w-5 h-5 ${idx < count ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.286 3.962c.3.921-.755 1.688-1.538 1.118l-3.378-2.455a1 1 0 00-1.175 0l-3.378 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.05 9.389c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.962z" />
        </svg>
      ))}
    </div>
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review._id} className="border p-6 rounded shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-lg">{review.name}</div>
            {renderStars(review.rating)}
          </div>
          <div className="mb-2 text-gray-700">{review.comment}</div>
          <div className="text-sm text-gray-400">
            {formatDate(review.createdAt)}
          </div>
        </div>
      ))}
    </div>
  );
}
