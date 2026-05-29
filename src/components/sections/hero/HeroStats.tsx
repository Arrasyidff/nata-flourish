const stats = [
  { label: "Produk", value: "100+" },
  { label: "Pelanggan", value: "500+" },
  { label: "Tahun", value: "5+" },
];

export default function HeroStats() {
  return (
    <div className="flex items-center gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <span className="font-heading text-h4 text-green-darker">{stat.value}</span>
          <span className="text-body-2 text-foreground/60">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
