import React from 'react'
import BrandLogo from '../components/BrandLogo'

const links = [
  { name: "Live", link: "/" },
  { name: "Push", link: "/" },
  { name: "Link", link: "/" },
  { name: "Shop", link: "/" },
  { name: "Packs", link: "/" },
  { name: "Help", link: "/" },
  { name: "More", link: "/" }
]

function Nav() {
  return (
    <header className='px-5 py-5 border-b-2 md:px-10'>
      <nav className='flex justify-between'>
        <div className='flex items-center gap-5'>
          <BrandLogo />
          <ul className='flex gap-8 max-lg:hidden'>
            {links.map(link => (
              <li key={link.name}>{link.name}</li>
            ))}
          </ul>
          <div className='lg:hidden'>
            <button href="#">Menu</button>
          </div>
        </div>

        <div className='flex items-center gap-8 max-lg:hidden'>
          <a href="#" className='text-secondary'>Try Live for free</a>
          <a href="#" className='text-base'>Account</a>
          <a href="#" className='text-base'>Log out</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav