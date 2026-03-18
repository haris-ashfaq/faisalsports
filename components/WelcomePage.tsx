'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap, Trophy, Flame } from 'lucide-react'
import Link from 'next/link'

const WelcomePage = () => {
    return (
        <div className="min-h-[70vh] bg-[#020202] flex items-center justify-center p-4 relative overflow-hidden font-sans">



            {/* Glass Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[850px] z-10 relative"
            >
                <div className="bg-white/2 backdrop-blur-3xl border border-white/10 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20 shadow-[0_80px_120px_-30px_rgba(0,0,0,0.9)] overflow-hidden">

                    {/* Floating Aura */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-accent/30 rounded-full blur-[80px] -z-10" />

                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="p-4 bg-brand-accent rounded-[2rem] shadow-[0_0_50px_rgba(8,203,0,0.4)] mb-10"
                        >
                            <Trophy className="w-12 h-12 text-black" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-2"
                        >
                            WELCOME TO <br />
                            <span className="text-brand-accent italic underline decoration-brand-accent/20 underline-offset-12">FAISAL SPORTS</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-gray-400 text-lg md:text-xl font-medium max-w-xl mb-6 leading-relaxed"
                        >
                            Your journey to peak performance starts here. Explore the world's most premium sports engineering.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="flex flex-wrap justify-center gap-6 mb-8"
                        >
                            <div className="flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-3 rounded-2xl">
                                <Zap className="w-5 h-5 text-brand-accent" />
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">High Tech</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-3 rounded-2xl">
                                <Flame className="w-5 h-5 text-brand-accent" />
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Quality Products</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-3 rounded-2xl">
                                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Secure</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.3, type: "spring" }}
                        >
                            <Link
                                href="/signup"
                                className="group relative inline-flex items-center gap-4 bg-brand-accent hover:bg-white text-black font-black uppercase text-sm tracking-[0.4em] px-12 py-7 rounded-[2rem] transition-all shadow-[0_30px_60px_-15px_rgba(8,203,0,0.4)] hover:scale-105 active:scale-95"
                            >
                                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mt-12">
                            Powered by Faisal Sports Engineering
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Ambient Particles (Pseudo) */}
            <div className="absolute top-[30%] left-[20%] w-1 h-1 bg-brand-accent rounded-full blur-[2px] animate-float opacity-30" />
            <div className="absolute bottom-[40%] right-[25%] w-1.5 h-1.5 bg-brand-accent rounded-full blur-[3px] animate-float delay-1000 opacity-20" />
        </div>
    )
}

export default WelcomePage
