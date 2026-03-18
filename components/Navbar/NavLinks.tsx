import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'Categories', href: '/categories' },
  { name: 'Contact', href: '/contact' },
];

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-black font-semibold text-sm uppercase tracking-wide hover:text-brand-primary transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
