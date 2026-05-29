const values: { title: string; description: string }[] = [];

export default function AboutValues() {
  return (
    <div className="grid grid-cols-2 gap-grid-gap">
      {values.map((v) => (
        <div key={v.title} className="flex flex-col gap-2">
          <p className="font-heading text-h6 text-green-darker">{v.title}</p>
          <p className="text-body-2 text-foreground/70">{v.description}</p>
        </div>
      ))}
    </div>
  );
}
