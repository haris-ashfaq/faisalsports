'use client';

import { Heart, ShoppingCart, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Actions = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Link
        href="/wishlist"
        className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
        aria-label="Wishlist"
      >
        <Heart className="w-6 h-7 text-black group-hover:text-brand-primary" />
        <span className="absolute top-1 left-6 bg-brand-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
          0
        </span>
      </Link>

      <Link
        href="/cart"
        className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
        aria-label="Cart"
      >
        <ShoppingCart className="w-6 h-7 text-black group-hover:text-brand-primary" />
        <span className="absolute top-1 left-6 bg-brand-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
          0
        </span>
      </Link>

      {session ? (
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-all ml-2 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span className="font-semibold text-sm hidden md:block">Logout</span>
        </button>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-brand-primary transition-all ml-2"
        >
          <User className="w-4 h-4" />
          <span className="font-semibold text-sm hidden md:block">Login</span>
        </Link>
      )}
    </div>
  );
};

export default Actions;

