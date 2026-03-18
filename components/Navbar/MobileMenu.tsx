'use client';

import Link from 'next/link';
import { X, Heart, ShoppingCart, User, LogOut } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'Categories', href: '/categories' },
  { name: 'Contact', href: '/contact' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { data: session } = useSession();

  return (
    <div
      className={`fixed inset-0 z-60 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onClose}
      ></div>

      {/* Menu Content */}
      <div className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="text-black font-extrabold text-xl tracking-tight">
            FAISAL<span className="text-brand-primary">SPORTS</span>
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-6">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-black font-bold text-lg uppercase tracking-wide hover:text-brand-primary transition-colors block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col gap-6">
            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center gap-4 text-black font-semibold hover:text-brand-primary transition-colors"
            >
              <Heart className="w-6 h-6" />
              Wishlist
            </Link>
            <Link
              href="/cart"
              onClick={onClose}
              className="flex items-center gap-4 text-black font-semibold hover:text-brand-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              Shopping Cart
            </Link>
          </div>
        </nav>

        <div className="p-6 border-t border-gray-100">
          {session ? (
            <button
              onClick={() => {
                signOut();
                onClose();
              }}
              className="flex items-center justify-center gap-2 bg-red-600 text-white w-full px-5 py-4 rounded-xl hover:bg-red-700 transition-all font-bold uppercase tracking-wider text-sm cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-black text-white px-5 py-4 rounded-xl hover:bg-brand-primary transition-all font-bold uppercase tracking-wider text-sm"
            >
              <User className="w-5 h-5" />
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

