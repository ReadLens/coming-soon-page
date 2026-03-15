"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WaitlistHeader from './components/WaitlistHeader';
import WaitlistForm from './components/WaitlistForm';
import SuccessState from './components/SuccessState';
import WaitlistFooter from './components/WaitlistFooter';
import HeroVisual from './components/HeroVisual';

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSuccess = (submittedEmail: string, successMessage?: string) => {
        setEmail(submittedEmail);
        if (successMessage) {
            setMessage(successMessage);
        }
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-neutral-white flex flex-col md:flex-row relative sm:overflow-x-hidden font-inter">
            {/* Decorative background elements - enhanced for mobile */}
            <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-green-light rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-30 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-green-light rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Left Content Area */}
            <div className="w-full md:w-1/2 flex flex-col items-center p-6 md:p-10 lg:p-16 relative z-10 min-h-screen">
                <WaitlistHeader />

                {/* Main Content */}
                <div className="w-full max-w-xl my-auto py-10">
                    <WaitlistForm onSuccess={handleSuccess} />

                    <AnimatePresence>
                        {isSubmitted && (
                            <SuccessState
                                email={email}
                                message={message}
                                onReset={() => setIsSubmitted(false)}
                            />
                        )}
                    </AnimatePresence>
                </div>

                <WaitlistFooter />
            </div>

            <HeroVisual />
        </div>
    );
}
