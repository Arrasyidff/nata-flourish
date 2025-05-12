import React from 'react'
import Logo from '@/app/components/Logo'

export default function NavBar() {
  return (
    <nav className="px-[40px] py-[24px] flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <Logo />
      <ul className="flex gap-[24px]">
        <li>
          <a className='text-[14px] font-medium text-white' href="/">HOME</a>
        </li>
        <li>
          <a className='text-[14px] font-medium text-white' href="/">CATEGORY</a>
        </li>
        <li>
          <a className='text-[14px] font-medium text-white' href="/">GALLERY</a>
        </li>
        
      </ul>
    </nav>
  )
}
