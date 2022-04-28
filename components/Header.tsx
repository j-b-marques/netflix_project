import { BellIcon, SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
/* import Image from 'next/image'
import useAuth from '../hooks/useAuth'
import BasicMenu from './BasicMenu'
 */
function Header() {
  const [isScrolled, SetScrolled] = useState(false)

  useEffect(() => {
    //*Pomos um evento na janela se for scrollada dispara e activa
    const handleScroll = () => {
      if (window.scrollY > 0) {
        SetScrolled(true)
      } else {
        //* se nao mantem-se falsa
        SetScrolled(false)
      }
    }
    //*invocamos a funçao em cima  sobre um evento de scroll em js
    window.addEventListener('scroll', handleScroll)

    //* limpamos a função
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) //* deixamos como dependêcias vazias para não ser sempre recarregado sempre que haja um re render

  return (
    <header className={`${isScrolled && 'bg-[red]'}`}>
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
