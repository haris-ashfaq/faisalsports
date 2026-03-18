
import { ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react'
import styles from '@/app/styles/hero.module.css'
import HeroCard from './HeroCard'

const Hero = () => {


    return (
        <section className={`text-gray-600 min-h-screen ${styles.bg} body-font`}>
            <div className="container mx-auto flex px-5 py-20  md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-4xl sm:text-6xl md:text-5xl lg:text-7xl mb-4 font-bold text-gray-200"><span className=" font-extrabold bg-gradient-to-r from-[#FFC107] to-brand-accent bg-clip-text text-transparent">The Best Quality</span> Sports Equipment</h1>
                    <p className="mb-8 text-white leading-relaxed">Discover high-quality sports equipment built for athletes of every level.
                        From training essentials to pro gear, we’ve got everything you need.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center w-full sm:w-auto">
                        <button className="bg-brand-accent text-black cursor-pointer px-10 py-4 rounded-lg font-black uppercase text-xs tracking-[0.2em]  hover:text-white transition-all shadow-xl active:scale-95 w-full sm:w-auto">
                            Shop Now
                        </button>
                        <button className="border-2 border-brand-accent cursor-pointer text-white px-10 py-[14px] rounded-lg font-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95 w-full sm:w-auto">
                            Explore Categories
                        </button>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-8 pt-6 border-t border-gray-100 max-w-xl w-full">
                        {[
                            { icon: Truck, text: "Fast Shipping" },
                            { icon: ShieldCheck, text: "Official Warranty" },
                            { icon: Star, text: "Elite Gear" },
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-1.5 sm:gap-2 group cursor-default">
                                <div className="p-1.5 sm:p-2 bg-brand-accent/5 rounded-lg group-hover:bg-brand-accent/10 transition-colors shrink-0">
                                    <badge.icon className="w-5 h-5 text-brand-accent" />
                                </div>
                                <span className="text-white font-bold text-[8px] sm:text-xs uppercase tracking-wider sm:tracking-widest whitespace-nowrap">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center">
                    <HeroCard />
                </div>
            </div>
        </section>
    );
};


export default Hero;
