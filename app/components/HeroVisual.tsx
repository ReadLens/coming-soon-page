"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../lib/waitlist-data';

import Logo from './Logo';

const HeroVisual = () => {
    return (
        <div className="hidden md:flex w-1/2 relative min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(52,105,2,0.2)]"
            >
                <Image
                    src="/img/login_img.jpg"
                    alt="ReadLens Community"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--green-normal)/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-(--green-normal)/10 mix-blend-overlay"></div>


                {/* Decorative element */}
                <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full blur-sm pointer-events-none"></div>
            </motion.div>
        </div>
    );
};

export default HeroVisual;
