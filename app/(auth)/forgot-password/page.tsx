'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const ForgotPasswordPage = () => {
    return (
        <div className="min-h-screen bg-[#020202] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Ultra-Modern Background Elements */}
            <div className="absolute top-[-20%] w-[60%] h-[60%] bg-brand-accent/30 rounded-full blur-[160px] animate-pulse pointer-events-none opacity-40" />
            <div className="absolute bottom-[-20%] w-[60%] h-[60%] bg-brand-accent/20 rounded-full blur-[160px] animate-pulse pointer-events-none opacity-30" />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[500px] z-10"
            >
                <div className="bg-white/2 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.9)] text-center">
                    
                    <div className="inline-flex items-center justify-center p-4 bg-brand-accent rounded-2xl shadow-[0_0_30px_rgba(8,203,0,0.4)] mb-8">
                        <ShieldCheck className="w-10 h-10 text-black" />
                    </div>

                    <h1 className="text-3xl font-black text-white tracking-tight mb-3">Reset Password</h1>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10 max-w-xs mx-auto">
                        Enter your email address and we'll send you a link to reset your password and get you back in the game.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2 text-left">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-brand-accent transition-colors" />
                                <input 
                                    type="email" 
                                    placeholder="name@faisalsports.com"
                                    className="w-full bg-white/3 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-brand-accent/40 focus:bg-white/5 transition-all"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-brand-accent hover:bg-white text-black font-black uppercase text-xs tracking-[0.3em] py-5 rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(8,203,0,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer">
                            Send Reset Link
                        </button>
                    </form>

                    <div className="mt-10">
                        <Link href="/login" className="inline-flex items-center gap-2 text-[11px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-all group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Login
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ForgotPasswordPage
