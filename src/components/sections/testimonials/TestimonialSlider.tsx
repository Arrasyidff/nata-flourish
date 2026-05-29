import { testimonials } from "./testimonials.data";
import TestimonialCard from "./TestimonialCard";
import EmptyState from "@/components/common/EmptyState";

export default function TestimonialSlider() {
  if (testimonials.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap">
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}
