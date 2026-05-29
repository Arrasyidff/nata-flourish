type EmptyStateProps = {
  title?: string;
  description?: string;
};

export default function EmptyState({
  title = "Tidak ada data",
  description = "Belum ada konten yang tersedia.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-h5 font-heading text-green-darker">{title}</p>
      <p className="text-body-1 text-foreground/60 mt-2">{description}</p>
    </div>
  );
}
