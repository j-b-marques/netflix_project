import { BellIcon, SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'
/* import Image from 'next/image'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import BasicMenu from './BasicMenu'
 */
function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="header__link">Home</li>
          <li className="header__link">Tv Shows</li>
          <li className="header__link">Movies</li>
          <li className="header__link">New Popular</li>
          <li className="header__link">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-2 text-sm ">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h- 6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
