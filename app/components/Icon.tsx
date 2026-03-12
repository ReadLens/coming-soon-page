"use client";

import React from 'react';
import Image from 'next/image';

interface IconProps {
	size?: number | 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
	color?: string;
}

// Convert size to pixel value
const getSizeValue = (size: number | string): number => {
	if (typeof size === 'number') return size;

	const sizeMap = {
		sm: 16,
		md: 20,
		lg: 24,
		xl: 32
	};

	return sizeMap[size as keyof typeof sizeMap] || 20;
};

// Calendar Icon (from your calender.svg)
export const CalendarIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);

	return (
		<svg
			width={sizeValue}
			height={sizeValue}
			viewBox="0 0 20 21"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_2195_35696)">
				<path
					d="M13.3333 2.56177V5.8951M2.5 9.22843H17.5M6.66667 2.56177V5.8951M14.1667 12.5618H9.16667M10.8333 15.8951H5.83333M5.83333 12.5618H5.84167M14.1667 15.8951H14.175M4.16667 4.22843H15.8333C16.7538 4.22843 17.5 4.97463 17.5 5.8951V17.5618C17.5 18.4822 16.7538 19.2284 15.8333 19.2284H4.16667C3.24619 19.2284 2.5 18.4822 2.5 17.5618V5.8951C2.5 4.97463 3.24619 4.22843 4.16667 4.22843Z"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2195_35696">
					<rect width="20" height="20" fill="white" transform="translate(0 0.89502)" />
				</clipPath>
			</defs>
		</svg>
	);
};

// Dropdown Arrow Icon (from your RightContent.svg)
export const ChevronDownIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);

	return (
		<svg
			width={sizeValue}
			height={sizeValue}
			viewBox="0 0 20 21"
			fill="none"
			className={className}
		>
			<path
				d="M5 8.39502L10 13.395L15 8.39502"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

// SMS Icon (if you have sms.svg)
export const SmsIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);

	return (
		<svg
			width={sizeValue}
			height={sizeValue}
			viewBox="0 0 20 20"
			fill="none"
			className={className}
		>
			<path
				d="M18 10C18 14.4183 14.4183 18 10 18C8.5 18 7.1 17.6 5.9 16.9L2 18L3.1 14.1C2.4 12.9 2 11.5 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

// X Icon (formerly Twitter)
export const XIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);
	return (
		<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill={color} className={className}>
			<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
		</svg>
	);
};

// LinkedIn Icon
export const LinkedInIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);
	return (
		<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill={color} className={className}>
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
		</svg>
	);
};

// Tiktok Icon
export const TiktokIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);
	return (
		<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill={color} className={className}>
			<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.33 1.47-1.3 2.46.02.79.39 1.56 1.03 2.02.61.48 1.38.63 2.14.53 1.19-.16 2.14-1.15 2.22-2.33l.03-11.48z" />
		</svg>
	);
};

// Facebook Icon
export const FacebookIcon: React.FC<IconProps> = ({ size = 'md', className = '', color = 'currentColor' }) => {
	const sizeValue = getSizeValue(size);
	return (
		<svg width={sizeValue} height={sizeValue} viewBox="0 0 24 24" fill={color} className={className}>
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
};

// Consolidated Icon component
export const Icon: React.FC<IconProps & { name: string }> = ({ name, ...props }) => {
	// Map common icon names to components
	const iconComponents: Record<string, React.FC<IconProps>> = {
		calendar: CalendarIcon,
		calender: CalendarIcon,
		'chevron-down': ChevronDownIcon,
		dropdown: ChevronDownIcon,
		rightcontent: ChevronDownIcon,
		sms: SmsIcon,
		x: XIcon,
		twitter: XIcon,
		linkedin: LinkedInIcon,
		tiktok: TiktokIcon,
		facebook: FacebookIcon,
	};

	const IconComponent = iconComponents[name.toLowerCase()];

	if (IconComponent) {
		return <IconComponent {...props} />;
	}

	// Fallback to Image-based icon if no specific path found in library
	return (
		<Image
			src={`/icon/${name}.svg`}
			alt={`${name} icon`}
			width={getSizeValue(props.size || 'md')}
			height={getSizeValue(props.size || 'md')}
			className={props.className}
		/>
	);
};

export default Icon;
