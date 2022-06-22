import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between px-3 py-3 fixed w-full z-50'>
      <Link href='/'>
        <button className='text-white'>LOGO</button>
      </Link>
      <div className='flex gap-9'>
        <Link href={'/agents'}>
          <button className='text-white hover:text-red-600'>AGENTS</button>
        </Link>
        <Link href={'/agents'}>
          <button className='text-white hover:text-red-600'>WEAPONS</button>
        </Link>
        <Link href={'/agents'}>
          <button className='text-white hover:text-red-600'>MAPS</button>
        </Link>
        <Link href={'/agents'}>
          <button className='text-white hover:text-red-600'>SKINS</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar