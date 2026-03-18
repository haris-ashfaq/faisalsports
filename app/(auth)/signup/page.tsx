'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, User, ArrowRight, Chrome, ShieldCheck, Apple } from 'lucide-react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link'
import axios from 'axios';

const SignUpPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const result = await axios.post("/api/auth/register", { name, email, password })
            console.log(result)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen bg-[#020202] flex items-center justify-center p-4 relative overflow-hidden font-sans">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[1000px] z-10"
            >
                <div className="grid lg:grid-cols-2 gap-0 bg-white/2 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.9)]">

                    {/* Left Side: Branding & Info */}
                    <div className="hidden lg:flex flex-col justify-between p-10 bg-linear-to-br from-brand-accent/10 to-transparent border-r border-white/10">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-brand-accent rounded-2xl shadow-[0_0_30px_rgba(8,203,0,0.4)]">
                                    <ShieldCheck className="w-8 h-8 text-black" />
                                </div>
                                <span className="text-2xl font-black text-white tracking-tighter italic">FAISAL<span className="text-brand-accent">SPORTS</span></span>
                            </div>

                            <h2 className="text-5xl font-black text-white leading-tight mb-6">
                                <span className="bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">Elevate Your</span><br />
                                <span className="text-brand-accent underline decoration-brand-accent/20 underline-offset-8 italic">Performance</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm">
                                Join our community of elite athletes. Get early access to premium gear and exclusive offers.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-4 text-white/60 text-sm font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                                <div className="p-2 bg-brand-accent/20 rounded-lg"><ArrowRight className="w-4 h-4 text-brand-accent" /></div>
                                Exclusive Member Only Pricing
                            </div>
                            <div className="flex items-center gap-4 text-white/60 text-sm font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                                <div className="p-2 bg-brand-accent/20 rounded-lg"><ArrowRight className="w-4 h-4 text-brand-accent" /></div>
                                Fast & Trackable Shipping
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="p-10 md:p-14">
                        <div className="mb-10 lg:hidden text-center">
                            <span className="text-2xl font-black text-white tracking-tighter italic">FAISAL<span className="text-brand-accent">SPORTS</span></span>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-3xl font-black text-white tracking-tight mb-2">Create Account</h3>
                        </div>

                        <form className="space-y-5" onSubmit={handleSignUp}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-brand-accent transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-white/3 border border-white/5 rounded-2xl py-3 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-brand-accent/40 focus:bg-white/5 transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-brand-accent transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-white/3 border border-white/5 rounded-2xl py-3 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-brand-accent/40 focus:bg-white/5 transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Password</label>
                                    <Link href="/forgot" className="text-[10px] font-black text-brand-accent uppercase tracking-widest hover:underline  underline-offset-4 transition-all">Forgot?</Link>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-brand-accent transition-colors" />
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full bg-white/3 border border-white/5 rounded-2xl py-3 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-brand-accent/40 focus:bg-white/5 transition-all"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-brand-accent hover:bg-white text-black font-black uppercase text-xs tracking-[0.3em] py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 cursor-pointer mt-4">
                                Sign Up
                            </button>
                        </form>

                        <div className="relative my-10 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/5" />
                            </div>
                            <span className="relative bg-[#0d0d0d] px-4 text-[10px] uppercase font-black text-gray-600 tracking-[0.3em]">
                                Faster Entry
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center p-4 bg-white/3 border border-white/5 rounded-2xl hover:bg-white/8 hover:border-white/10 transition-all cursor-pointer">
                                <FcGoogle className="w-6 h-6 text-white" />
                            </button>
                            <button className="flex items-center justify-center p-4 bg-white/3 border border-white/5 rounded-2xl hover:bg-white/8 hover:border-white/10 transition-all cursor-pointer">
                                <FaFacebook className="w-6 h-6 text-[#1877F2]" />
                            </button>

                        </div>

                        <p className="text-center text-gray-500 text-[11px] font-bold mt-10 uppercase tracking-widest">
                            Member already? {' '}
                            <Link href="/login" className="text-white hover:text-brand-accent transition-colors underline decoration-brand-accent/40 underline-offset-4">Sign In</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SignUpPage