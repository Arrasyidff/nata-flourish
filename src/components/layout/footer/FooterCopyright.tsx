export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className="text-body-3 font-normal text-green-light-active border-t border-green-dark pt-8">
      &copy; {year} NATA FLOURISH. INDONESIA.
    </p>
  );
}
