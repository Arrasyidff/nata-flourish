import { cn } from "@/lib/utils";
import type { WhyChooseItem } from "./whyChoose.data";

type WhyChooseCardProps = {
  item: WhyChooseItem;
};

const positionClasses = {
  "bottom-left": "justify-end items-start",
  "bottom-right": "justify-end items-end",
};

const bgClasses = {
  darker: "bg-green-darker",
  // darker: "bg-red-500",
  dark: "bg-green-dark",
  normal: "bg-green-normal",
  light: "bg-green-light",
};

const textClasses = {
  darker: { heading: "text-white", body: "text-white" },
  dark: { heading: "text-white", body: "text-white" },
  normal: { heading: "text-white", body: "text-white" },
  light: { heading: "text-green-darker", body: "text-green-darker" },
};

export default function WhyChooseCard({ item }: WhyChooseCardProps) {
  const colors = textClasses[item.variant];

  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-card h-full",
        positionClasses[item.textPosition],
        bgClasses[item.variant]
      )}
    >
      <h3
        className={cn(
          "font-heading text-h6 font-bold",
          colors.heading
        )}
        style={{ textAlign: item.textPosition == 'bottom-left' ? 'left' : 'right' }}
      >
        {item.title}
      </h3>
      <p
        className={cn(
          "text-body-1 font-normal mt-2",
          colors.body
        )}
        style={{ textAlign: item.textPosition == 'bottom-left' ? 'left' : 'right' }}
      >
        {item.description}
      </p>
    </div>
  );
}
