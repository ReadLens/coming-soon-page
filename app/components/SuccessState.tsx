"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface SuccessStateProps {
    email: string;
    onReset: () => void;
}

const SuccessState: React.FC<SuccessStateProps> = ({ email, onReset }) => {
    return (
        <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-center lg:text-left"
        >
            <div className="w-20 h-20 bg-green-light rounded-3xl lg:rounded-full flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-inner">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--green-normal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h2 className="text-green-normal font-sherika font-bold text-4xl md:text-5xl mb-6 leading-tight">
                You&apos;re on <br className="lg:hidden" /> the list!
            </h2>
            <p className="text-primary-normal text-lg md:text-xl mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Thank you for joining. We&apos;ve sent a confirmation email to <span className="font-bold text-green-normal">{email}</span>.
            </p>
            <Button
                variant="soft-green"
                size="md"
                onClick={onReset}
                className="rounded-xl"
            >
                Entered wrong email?
            </Button>
        </motion.div>
    );
};

export default SuccessState;
