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
    <header className='p-5 border-b-2'>
      <nav className='flex justify-between'>
        <div className='flex items-center gap-5'>
          <BrandLogo />
          <ul className='flex gap-3 max-lg:hidden'>
            {links.map(link => (
              <li key={link.name}>{link.name}</li>
            ))}
          </ul>
          <div className='lg:hidden'>
            <button href="#">Menu</button>
          </div>
        </div>

        <div className='flex gap-3 max-lg:hidden'>
          <a href="#" className='text-secondary'>Try Live for free</a>
          <a href="#">Account</a>
          <a href="#">Log out</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav