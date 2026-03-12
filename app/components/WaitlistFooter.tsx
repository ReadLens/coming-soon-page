"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../lib/waitlist-data';
import Icon from './Icon';

const WaitlistFooter = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full flex justify-center md:justify-start mt-auto pt-12 lg:pt-0"
        >
            <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-light border border-green-light-active text-green-normal hover:bg-green-normal hover:text-white transition-all duration-300 shadow-sm"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        title={link.label}
                    >
                        <Icon name={link.label.toLowerCase()} size="sm" />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default WaitlistFooter;
