import type { Testimonial } from "@/types/testimonial";
import Image from "next/image";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-card bg-white shadow-sm">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < testimonial.rating ? "text-yellow-400" : "text-green-light-active"}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-body-1 text-foreground/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex items-center gap-3 mt-2">
        {testimonial.avatar && (
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-green-light">
            <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="text-body-2 font-medium text-green-darker">{testimonial.name}</p>
          <p className="text-body-3 text-foreground/60">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
