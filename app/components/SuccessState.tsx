"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface SuccessStateProps {
    email: string;
    message?: string;
    onReset: () => void;
}

const SuccessState: React.FC<SuccessStateProps> = ({ email, message, onReset }) => {
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onReset}
                className="absolute inset-0 bg-primary-normal/20 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
                key="success-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 300 
                }}
                className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-green-light"
            >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-light/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center mb-8 shadow-inner relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", damping: 12 }}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--green-normal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </motion.div>
                    </div>
                    
                    <h2 className="text-green-normal font-sherika font-bold text-4xl md:text-5xl mb-6 leading-tight">
                        You&apos;re on <br /> the list!
                    </h2>
                    
                    <p className="text-primary-normal text-lg leading-relaxed mb-8 whitespace-pre-line opacity-90">
                        {message || `Thank you for joining. We've sent a confirmation email to ${email}.`}
                    </p>
                    
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={onReset}
                        className="w-full h-14 rounded-2xl font-bold shadow-lg shadow-green-light-active"
                    >
                        Great, thanks!
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default SuccessState;
