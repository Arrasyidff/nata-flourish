const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "10+", label: "Tahun Berkarya" },
  { value: "100%", label: "Dibuat Custom" },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <h2 className="font-heading text-h2 font-bold text-green-normal-active">
        Tentang Kami
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-body-1 font-normal text-green-darker">
          Nata Flourish adalah brand lokal asal Bali yang membuat furnitur
          kenyamanan custom untuk villa, restoran, dan hotel. Kami bekerja sama
          dengan penjahit profesional lokal untuk menghasilkan bantal, kasur,
          bean bag, payung pantai, dan lainnya — semua dibuat sesuai kebutuhan
          Anda.
        </p>
        <p className="text-body-1 font-normal text-green-darker">
          Kami menjaga semuanya tetap sederhana: bahan yang baik, kualitas yang
          konsisten, dan harga yang wajar. Belum tahu butuh apa? Kami siap
          datang langsung ke lokasi Anda untuk bantu menentukan yang terbaik.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-grid-gap flex-1">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 bg-green-light rounded-card p-5 justify-end items-start"
          >
            <span className="font-heading text-h3 font-bold text-green-normal-active">
              {stat.value}
            </span>
            <span className="text-body-3 font-normal text-green-darker">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
