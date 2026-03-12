"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../lib/waitlist-data';

const HeroVisual = () => {
    return (
        <div className="hidden md:flex w-1/2 relative p-6 lg:p-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(52,105,2,0.2)]"
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

                {/* Floating Stat Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-8 right-8 lg:bottom-16 lg:left-16 lg:right-16 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 lg:p-10 rounded-[24px] lg:rounded-[40px] shadow-2xl"
                >
                    <div className="flex items-center gap-3 lg:gap-5 mb-4 lg:mb-6">
                        <div className="flex -space-x-3 lg:-space-x-5">
                            {STATS_DATA.avatars.map((avatar, i) => (
                                <div key={i} className="w-9 h-9 lg:w-12 lg:h-12 rounded-full border-[3px] border-green-normal bg-green-light overflow-hidden shadow-lg">
                                    <Image src={avatar} alt={`User ${i + 1}`} width={48} height={48} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-white font-bold text-base lg:text-xl leading-none">{STATS_DATA.count}</p>
                            <p className="text-white/70 text-xs lg:text-sm font-medium">{STATS_DATA.label}</p>
                        </div>
                    </div>
                    <p className="text-white text-base lg:text-xl leading-relaxed font-medium">
                        &quot;{STATS_DATA.testimonial}&quot;
                    </p>
                </motion.div>

                {/* decorative elements */}
                <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full blur-sm"></div>
            </motion.div>
        </div>
    );
};

export default HeroVisual;
