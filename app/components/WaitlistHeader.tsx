"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from './Logo';

const WaitlistHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center"
        >
            <Link href="/">
                <Logo variant="green" size="lg" />
            </Link>

            {/* Mobile only floating element - hidden on iPad and up */}
            <div className="md:hidden">
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="bg-green-light p-2 rounded-xl shadow-sm border border-green-light-active"
                >
                    <Image src="/books/bookimage.png" alt="Book" width={32} height={40} className="rounded-sm" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WaitlistHeader;
