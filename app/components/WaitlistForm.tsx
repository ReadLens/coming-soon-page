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

            <h1 className="text-green-normal font-sherika font-bold text-4xl md:text-5xl lg:text-6xl lg:leading-tight mb-6 text-balance leading-[1.1]">
                The Future of Reading <span className="text-primary-normal">is Almost Here.</span>
            </h1>
            <p className="text-primary-normal text-base md:text-xl mb-10 leading-relaxed max-w-lg opacity-80 lg:opacity-100">
                Join an exclusive community of readers and authors. Be the first to know when we launch and get early access to premium features.
            </p>

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

            <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3 lg:hidden">
                    {STATS_DATA.avatars.slice(0, 3).map((avatar: string, i: number) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-green-normal bg-green-light overflow-hidden shadow-sm">
                            <Image src={avatar} alt={`User ${i + 1}`} width={32} height={32} />
                        </div>
                    ))}
                </div>
                <p className="text-primary-lighter text-sm font-medium">
                    Join <span className="text-green-normal font-bold">5,000+</span> early birds
                </p>
            </div>
        </motion.div>
    );
};

export default WaitlistForm;
