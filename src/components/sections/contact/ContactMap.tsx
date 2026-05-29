type ContactMapProps = {
  embedUrl?: string;
};

export default function ContactMap({ embedUrl }: ContactMapProps) {
  if (!embedUrl) return null;

  return (
    <div className="w-full aspect-video rounded-card overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
}
