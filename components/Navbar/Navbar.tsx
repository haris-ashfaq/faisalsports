'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import Actions from './Actions';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center w-full justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Left: Logo & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>

          {/* Center: Search (Always visible, expands on md+) */}
          <div className="flex-1 max-w-xs sm:max-w-md md:max-w-xl">
            <SearchBar />
          </div>

          {/* Right: Links & Actions */}
          <div className="flex items-center gap-2 sm:gap-8">
            <NavLinks />
            <Actions />
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
