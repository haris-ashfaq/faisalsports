import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-brand-primary p-1.5 rounded-lg transition-transform group-hover:scale-105">
        <span className="text-brand-accent font-bold text-xl tracking-tighter">FS</span>
      </div>
      <span className="text-black font-extrabold text-2xl tracking-tight hidden sm:block">
        FAISAL<span className="text-brand-primary">SPORTS</span>
      </span>
    </Link>
  );
};

export default Logo;
