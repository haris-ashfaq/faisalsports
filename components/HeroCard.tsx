'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap, ShoppingCart, Percent } from 'lucide-react'
import productImg from '@/app/assets/product.jpg'

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group w-full max-w-[320px] lg:max-w-[400px] aspect-square flex items-center justify-center p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0  w-10 h-10 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-accent/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0  w-10 h-10 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-accent/20 transition-colors duration-500" />

      {/* Main Image Container */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <Image
          src={productImg}
          alt="Premium Sports Gear"
          width={400}
          height={400}
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-700"
        />
      </motion.div>

      {/* Badges & Floating Info */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-3">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-brand-accent text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter flex items-center gap-2 shadow-lg"
        >
          <Zap className="w-3 h-3 fill-black" />
          Flash Sale
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2 py-1 rounded-full font-black text-[10px] uppercase tracking-tighter flex items-center gap-2 shadow-lg"
        >
          <Percent className="w-3 h-3 text-brand-accent" />
          50% OFF
        </motion.div>
      </div>

      {/* Price Tag Floating */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hover:border-brand-accent/50 transition-colors"
      >
        <div className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">Limited Offer</div>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-black text-white">$49.99</span>
          <span className="text-sm text-gray-500 line-through mb-1">$99.99</span>
        </div>
      </motion.div>

      {/* Call to Action Layer (revealed on hover) */}
      <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-accent/5 pointer-events-none" />

      <div className="absolute bottom-10 right-8 z-40 ">
        <button className="bg-brand-accent hover:bg-white text-black p-4 rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer active:scale-90">
          <ShoppingCart className="w-6 h-6 shrink-0" />
        </button>
      </div>

    </motion.div>
  )
}

export default HeroCard
