import React from 'react'

export default function Header() {
  return (
    <div className="bg-[url('/images/bg-hero.jpg')] bg-cover bg-center h-[100vh]">
      <div className="bg-black/40 h-full w-full flex flex-col justify-center items-center">
        <>
          <h1 className="mb-[6px] text-center text-[40px] font-bold text-white">Percantik Ruangan Anda dengan Produk Interior Terbaik</h1>
          <p className="text-center text-[19px] font-[100] text-white">Kami menawarkan berbagai produk interior terbaik untuk mempercantik ruangan Anda.</p>
        </>
        <button className="mt-[22px] bg-[#FF9F29] text-white px-[19px] py-[10px] rounded-[4px]">Lihat Koleksi</button>
      </div>
    </div>
  )
}
