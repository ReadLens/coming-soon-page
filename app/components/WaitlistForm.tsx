"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';
import Input from './Input';
import LayeredBooksDisplay from './LayeredBooksDisplay';
import { BOOK_DATA, STATS_DATA } from '../lib/waitlist-data';
import { joinWaitlist } from '../lib/api';

interface WaitlistFormProps {
    onSuccess: (email: string, message?: string) => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const response = await joinWaitlist(email);
            
            if (response.success) {
                setEmail('');
                onSuccess(email, response.message);
            } else {
                setError(response.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('A network error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
        >
            {/* Mobile category badge */}
            <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-green-light text-green-normal text-xs font-bold uppercase tracking-widest mb-6 md:hidden"
            >
                Coming Soon
            </motion.span>

            {/* Mobile Image Banner */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="md:hidden mb-5 mt-4"
            >
                <LayeredBooksDisplay
                    books={BOOK_DATA}
                    autoPlay={true}
                    autoPlayInterval={5000}
                    className="h-[300px]"
                />
            </motion.div>

            <h1 className="text-green-normal font-sherika font-bold text-[28px] md:text-[36px] lg:text-5xl xl:text-6xl lg:leading-tight mb-6 leading-[1.2]">
                <span className="block">The Future of Reading</span>
                <span className="block">is Almost Here.</span>
            </h1>
            <p className="text-primary-normal text-sm md:text-base lg:text-lg mb-10 leading-relaxed max-w-lg opacity-80 lg:opacity-100">
                Join an exclusive community of readers and authors. Be the first to know when we launch and get early access to premium features.
            </p>

            {/* Professional Stat & Testimonial Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-md mb-8 p-6 lg:p-8 rounded-[24px] bg-white border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
                <div className="flex items-center gap-4 mb-4 lg:mb-5">
                    <div className="flex -space-x-3">
                        {STATS_DATA.avatars.map((avatar: string, i: number) => (
                            <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-green-light overflow-hidden shadow-sm relative z-10" style={{ zIndex: STATS_DATA.avatars.length - i }}>
                                <Image src={avatar} alt={`User ${i + 1}`} width={48} height={48} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-primary-normal font-bold text-lg lg:text-xl leading-none mb-1">{STATS_DATA.count}</p>
                        <p className="text-primary-lighter text-sm lg:text-base font-medium">{STATS_DATA.label}</p>
                    </div>
                </div>
                
                <p className="text-primary-normal text-base lg:text-lg leading-relaxed font-medium text-neutral-600">
                    &quot;{STATS_DATA.testimonial}&quot;
                </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
                <div className="relative group min-h-20">
                    <Input
                        placeholder="Enter your email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        variant={error ? 'error' : 'default'}
                        helperText={error}
                        className="h-14 lg:h-16 lg:text-lg"
                    />
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isLoading}
                    className="h-14 lg:h-16 text-lg font-bold shadow-[--green-light-active] rounded-xl lg:rounded-2xl transform active:scale-[0.98] transition-all"
                >
                    Join the Waitlist
                </Button>
            </form>
        </motion.div>
    );
};

export default WaitlistForm;
