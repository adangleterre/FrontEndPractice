import BrandLogo from '../components/BrandLogo'

const links = [
  { name: "Live", target: "#" },
  { name: "Push", target: "#" },
  { name: "Link", target: "#" },
  { name: "Shop", target: "#" },
  { name: "Packs", target: "#" },
  { name: "Help", target: "#" },
  { name: "More", target: "#" }
]

function Nav() {
  return (
    <header className='px-5 py-5 border-b-2 md:px-10'>
      <nav className='flex justify-between'>
        <div className='flex items-center gap-5'>
          <BrandLogo />
          <ul className='flex gap-5 max-lg:hidden'>
            {links.map(link => (
              <li key={link.name}><a className='text-xl font-medium' href={link.target}>{link.name}</a></li>
            ))}
          </ul>
          <div className='lg:hidden'>
            <button href="#" className='text-xl font-medium'>Menu</button>
          </div>
        </div>

        <div className='flex items-center gap-8 max-lg:hidden'>
          <a href="#" className='text-xl font-medium text-secondary'>Try Live for free</a>
          <a href="#" className='text-base font-medium'>Account</a>
          <a href="#" className='text-base font-medium'>Log out</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav