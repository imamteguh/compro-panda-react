import { Menu, X } from "lucide-react";
import { useState } from "react"

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Company', href: '#company' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-900">
          <div className="w-8 h-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full border-3
            sm:border-4 border-pink-600 text-pink-600 mr-2">
            P
          </div>
          <span>
            ro <span className="text-yellow-500">Service</span>
          </span>
        </div>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-green-500 transition-colors">{item.name}</a>
            </li>
          ))}
        </ul>
        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors">
            Get Started
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
            {isOpenMenu ? (
              <X className="w-6 h-6 text-gray-900" />
            ): (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
            </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpenMenu && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpenMenu(false)}
                  className="block rounded-md px-4 text-gray-700 font-medium py-2 hover:bg-gray-100 
                    hover:text-green-500 transition-colors">
                  {item.name}
                </a>
              </div>
            ))}
            <div>
              <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar