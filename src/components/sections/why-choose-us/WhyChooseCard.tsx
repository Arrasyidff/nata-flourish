import type { WhyChooseItem } from "./whyChoose.data";

type WhyChooseCardProps = {
  item: WhyChooseItem;
};

export default function WhyChooseCard({ item }: WhyChooseCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-card bg-white">
      <h3 className="font-heading text-h6 text-green-darker">{item.title}</h3>
      <p className="text-body-2 text-foreground/70">{item.description}</p>
    </div>
  );
}
