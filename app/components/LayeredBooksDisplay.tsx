// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';

// interface Book {
// 	src: string;
// 	alt: string;
// 	title: string;
// 	author: string;
// }

// interface LayeredBooksDisplayProps {
// 	books: Book[];
// 	autoPlay?: boolean;
// 	autoPlayInterval?: number;
// 	className?: string;
// }

// const LayeredBooksDisplay: React.FC<LayeredBooksDisplayProps> = ({
// 	books,
// 	autoPlay = true,
// 	autoPlayInterval = 4000,
// 	className = ''
// }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [isTransitioning, setIsTransitioning] = useState(false);

// 	const nextSlide = useCallback(() => {
// 		if (isTransitioning) return;
// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => (prev + 1) % books.length);
// 		setTimeout(() => setIsTransitioning(false), 500);
// 	}, [isTransitioning, books.length]);

// 	// Auto-play functionality
// 	useEffect(() => {
// 		if (!autoPlay || books.length <= 2) return;

// 		const interval = setInterval(() => {
// 			nextSlide();
// 		}, autoPlayInterval);

// 		return () => clearInterval(interval);
// 	}, [autoPlay, autoPlayInterval, books.length, nextSlide]);

// 	const prevSlide = () => {
// 		if (isTransitioning) return;
// 		setIsTransitioning(true);
// 		setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
// 		setTimeout(() => setIsTransitioning(false), 500);
// 	};

// 	const goToSlide = (index: number) => {
// 		if (isTransitioning || index === currentIndex) return;
// 		setIsTransitioning(true);
// 		setCurrentIndex(index);
// 		setTimeout(() => setIsTransitioning(false), 500);
// 	};

// 	// Get books for current view (3 books: left, center, right)
// 	const getVisibleBooks = () => {
// 		const totalBooks = books.length;
// 		if (totalBooks === 0) return { left: null, center: null, right: null };

// 		const leftIndex = (currentIndex + totalBooks - 1) % totalBooks;
// 		const centerIndex = currentIndex;
// 		const rightIndex = (currentIndex + 1) % totalBooks;

// 		return {
// 			left: books[leftIndex],
// 			center: books[centerIndex],
// 			right: books[rightIndex]
// 		};
// 	};

// 	const visibleBooks = getVisibleBooks();

// 	return (
// 		<div className={`relative ${className}`}>
// 			<div className="flex flex-row justify-between h-full w-full relative">
// 				{/* Left Position - Fixed size 276x414 */}
// 				<div className="z-0 transition-all duration-500 ease-in-out">
// 					{visibleBooks.left && (
// 						<Image
// 							src={visibleBooks.left.src}
// 							alt={visibleBooks.left.alt}
// 							width={276}
// 							height={414}
// 							className="rounded-lg shadow-lg opacity-20"
// 						/>
// 					)}
// 				</div>

// 				{/* Center Position (Main Featured) - Fixed size 318x476 */}
// 				<div className="absolute left-1/2 top-[-20px] z-20 transform -translate-x-1/2 transition-all duration-500 ease-in-out">
// 					{visibleBooks.center && (
// 						<Image
// 							src={visibleBooks.center.src}
// 							alt={visibleBooks.center.alt}
// 							width={318}
// 							height={476}
// 							className="rounded-lg shadow-2xl"
// 						/>
// 					)}
// 				</div>

// 				{/* Right Position - Fixed size 276x414 */}
// 				<div className="z-0 transition-all duration-500 ease-in-out">
// 					{visibleBooks.right && (
// 						<Image
// 							src={visibleBooks.right.src}
// 							alt={visibleBooks.right.alt}
// 							width={276}
// 							height={414}
// 							className="rounded-lg shadow-lg opacity-20"
// 						/>
// 					)}
// 				</div>
// 			</div>

// 			{/* Navigation Controls */}
// 			{books.length > 2 && (
// 				<>
// 					{/* Previous Button */}
// 					<button
// 						onClick={prevSlide}
// 						disabled={isTransitioning}
// 						className="absolute left-1 top-1/2 transform -translate-y-1/2 z-30 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2   transition-all duration-200 disabled:opacity-50 w-[150px] h-[400px]"
// 					>

// 					</button>

// 					{/* Next Button */}
// 					<button
// 						onClick={nextSlide}
// 						disabled={isTransitioning}
// 						className="absolute right-1 top-1/2 transform -translate-y-1/2 z-30 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2  transition-all duration-200 disabled:opacity-50 w-[150px] h-[400px]"
// 					>

// 					</button>


// 				</>
// 			)}


// 		</div>
// 	);
// };

// export default LayeredBooksDisplay;



"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Book {
	src: string;
	alt: string;
	title: string;
	author: string;
}

interface LayeredBooksDisplayProps {
	books: Book[];
	autoPlay?: boolean;
	autoPlayInterval?: number;
	className?: string;
}

const LayeredBooksDisplay: React.FC<LayeredBooksDisplayProps> = ({
	books,
	autoPlay = true,
	autoPlayInterval = 4000,
	className = "",
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const nextSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex((prev) => (prev + 1) % books.length);
		setTimeout(() => setIsTransitioning(false), 800);
	}, [isTransitioning, books.length]);

	useEffect(() => {
		if (!autoPlay || books.length <= 2) return;
		const interval = setInterval(() => {
			nextSlide();
		}, autoPlayInterval);
		return () => clearInterval(interval);
	}, [autoPlay, autoPlayInterval, books.length, nextSlide]);

	const prevSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
		setTimeout(() => setIsTransitioning(false), 800);
	};

	const getVisibleBooks = () => {
		const totalBooks = books.length;
		if (totalBooks === 0)
			return { left: null, center: null, right: null };

		const leftIndex = (currentIndex + totalBooks - 1) % totalBooks;
		const centerIndex = currentIndex;
		const rightIndex = (currentIndex + 1) % totalBooks;

		return {
			left: books[leftIndex],
			center: books[centerIndex],
			right: books[rightIndex],
		};
	};

	const visibleBooks = getVisibleBooks();

	// Animation variants for rotation transitions
	const variants = {
		left: { x: "-150px", scale: 0.9, rotateY: 20, opacity: 0.3, zIndex: 5 },
		center: { x: "0px", scale: 1, rotateY: 0, opacity: 1, zIndex: 10 },
		right: { x: "150px", scale: 0.9, rotateY: -20, opacity: 0.3, zIndex: 5 },
		exit: { opacity: 0 },
	};

	return (
		<div className={`relative ${className}`}>
			<div className="relative w-full h-[300px] md:h-[476px]">
				{/* Left */}
				<AnimatePresence mode="popLayout">
					{visibleBooks.left && (
						<motion.div
							key={visibleBooks.left.src}
							variants={variants}
							initial="center"
							animate="left"
							exit="exit"
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className="z-0 absolute left-1/2 top-0 transform  md:translate-x-[-60%] translate-x-[-25%]"
						>
							<Image
								src={visibleBooks.left.src}
								alt={visibleBooks.left.alt}
								width={276}
								height={414}
								className="rounded-lg shadow-lg"
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Center */}
				<AnimatePresence mode="popLayout">
					{visibleBooks.center && (
						<motion.div
							key={visibleBooks.center.src}
							variants={variants}
							initial="right"
							animate="center"
							exit="exit"
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className="z-20 absolute left-1/2 top-[5px] md:top-[-20px] transform -translate-x-1/2"
						>
							<Image
								src={visibleBooks.center.src}
								alt={visibleBooks.center.alt}
								width={318}
								height={476}
								className="rounded-lg shadow-2xl"
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Right */}
				<AnimatePresence mode="popLayout">
					{visibleBooks.right && (
						<motion.div
							key={visibleBooks.right.src}
							variants={variants}
							initial="left"
							animate="right"
							exit="exit"
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className="z-0 absolute left-1/2 top-0 transform md:translate-x-[-38%] translate-x-[-76%]"
						>
							<Image
								src={visibleBooks.right.src}
								alt={visibleBooks.right.alt}
								width={276}
								height={414}
								className="rounded-lg shadow-lg"
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Buttons */}
			{books.length > 2 && (
				<>
					<button
						onClick={prevSlide}
						disabled={isTransitioning}
						className="absolute md:left-1 left-[22px] top-1/2 transform -translate-y-1/2 z-30 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 disabled:opacity-50 w-[80px] md:w-[150px] h-[300px] md:h-[400px]"
					></button>

					<button
						onClick={nextSlide}
						disabled={isTransitioning}
						className="absolute md:right-1 right-[22px] top-1/2 transform -translate-y-1/2 z-30 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 disabled:opacity-50 w-[80px] md:w-[150px] h-[300px] md:h-[400px]"
					></button>
				</>
			)}
		</div>
	);
};

export default LayeredBooksDisplay;