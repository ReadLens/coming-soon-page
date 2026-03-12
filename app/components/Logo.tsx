import React from 'react';
import Image from 'next/image';

interface LogoProps {
	size?: 'sm' | 'md' | 'lg';
	variant?: 'black' | 'green';
	className?: string;
}

const Logo: React.FC<LogoProps> = ({
	size = 'md',
	variant = 'black',
	className = ''
}) => {
	const sizeClasses = {
		sm: 'h-6 w-auto',
		md: 'h-8 w-auto',
		lg: 'h-10 w-auto'
	};

	const logoSrc = variant === 'green' ? '/Logo/ReadlensGreen.svg' : '/Logo/ReadlensBlack.svg';

	return (
		<div className={`flex items-center ${className}`}>
			<Image
				src={logoSrc}
				alt="Readlens"
				width={1027}
				height={255}
				className={sizeClasses[size]}
				priority
			/>
		</div>
	);
};

export default Logo;
