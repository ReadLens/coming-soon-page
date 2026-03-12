"use client";

import React, { useState, forwardRef } from 'react';
import Image from 'next/image';
import Icon from './Icon';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	label?: string;
	variant?: 'default' | 'success' | 'error' | 'warning' | 'disabled';
	size?: 'sm' | 'md' | 'lg';
	helperText?: string;
	icon?: React.ReactNode;
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
	showPasswordToggle?: boolean;
	fullWidth?: boolean;
	required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
	label,
	variant = 'default',
	size = 'md',
	helperText,
	icon,
	type = 'text',
	showPasswordToggle = false,
	fullWidth = true,
	required = false,
	className = '',
	disabled,
	placeholder,
	...props
}, ref) => {
	const [showPassword, setShowPassword] = useState(false);
	const [internalError, setInternalError] = useState<string>('');
	const inputRef = React.useRef<HTMLInputElement>(null);
	const helperTextId = React.useId();
	const inputType = type === 'password' && showPassword ? 'text' : type;
	const isDisabled = disabled || variant === 'disabled';
	const hasError = variant === 'error' || !!internalError;
	// Priority: 1. External error with helperText, 2. Internal error, 3. Helper text (non-error)
	const errorMessage = variant === 'error' && helperText
		? helperText
		: internalError
			? internalError
			: helperText;

	// Determine the effective variant (error takes precedence)
	const effectiveVariant = hasError ? 'error' : variant;
	const effectiveVariantClasses = `input-${effectiveVariant}`;

	const baseClasses = 'input';
	const sizeClasses = `input-${size}`;
	const iconClasses = (icon || (type === 'password' && showPasswordToggle) || type === 'date') ? 'input-with-icon' : '';
	const widthClasses = fullWidth ? 'w-full' : '';

	const allClasses = [
		baseClasses,
		effectiveVariantClasses,
		sizeClasses,
		iconClasses,
		widthClasses,
		className
	].filter(Boolean).join(' ');

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		props.onFocus?.(e);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		// Check HTML5 validation on blur
		const input = e.target as HTMLInputElement;
		if (input.validity && !input.validity.valid && !internalError && variant !== 'error') {
			// Only set internal error if variant is not already error
			let errorMsg = '';
			if (input.validity.valueMissing && required) {
				errorMsg = 'This field is required';
			} else if (input.validity.typeMismatch && type === 'email') {
				errorMsg = 'Invalid email';
			} else if (input.validity.typeMismatch && type === 'url') {
				errorMsg = 'Invalid URL';
			} else if (input.validationMessage) {
				errorMsg = input.validationMessage;
			}
			if (errorMsg) {
				setInternalError(errorMsg);
			}
		}
		props.onBlur?.(e);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Clear internal error when user starts typing
		if (internalError) {
			setInternalError('');
		}
		props.onChange?.(e);
	};

	const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
		// Prevent default browser validation message
		e.preventDefault();
		// Set internal error based on validity
		const input = e.target as HTMLInputElement;
		if (!internalError) {
			let errorMsg = '';
			if (input.validity.valueMissing && required) {
				errorMsg = 'This field is required';
			} else if (input.validity.typeMismatch && type === 'email') {
				errorMsg = 'Invalid email';
			} else if (input.validity.typeMismatch && type === 'url') {
				errorMsg = 'Invalid URL';
			} else if (input.validationMessage) {
				errorMsg = input.validationMessage;
			}
			if (errorMsg) {
				setInternalError(errorMsg);
			}
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const getHelperTextClass = () => {
		if (hasError) return 'input-helper-error';
		if (variant === 'success') return 'input-helper-success';
		if (variant === 'warning') return 'input-helper-warning';
		return 'input-helper-default';
	};

	const renderIcon = () => {
		if (type === 'password' && showPasswordToggle) {
			return (
				<button
					type="button"
					className="input-password-toggle"
					onClick={togglePasswordVisibility}
					tabIndex={-1}
					aria-label={showPassword ? 'Hide password' : 'Show password'}
				>
					{showPassword ? (
						<Icon name="RightEyeCloseContent" size="md" />
					) : (
						<Icon name="RightEyeOpenContent" size="md" />
					)}
				</button>
			);
		}

		if (type === 'date') {
			const handleCalendarClick = (e: React.MouseEvent) => {
				e.preventDefault();
				e.stopPropagation();

				const inputElement = inputRef.current || (ref as React.RefObject<HTMLInputElement>)?.current;
				if (inputElement && !isDisabled) {
					// First focus the input
					inputElement.focus();

					// Small delay to ensure focus is set, then trigger picker
					setTimeout(() => {
						if ('showPicker' in inputElement && typeof inputElement.showPicker === 'function') {
							try {
								inputElement.showPicker();
							} catch {
								// Fallback: simulate click on the input
								inputElement.click();
								console.log('showPicker failed, using click fallback');
							}
						} else {
							// Fallback for browsers without showPicker
							inputElement.click();
						}
					}, 100);
				}
			};

			return (
				<button
					type="button"
					className="input-icon cursor-pointer hover:opacity-80 transition-opacity"
					onClick={handleCalendarClick}
					disabled={isDisabled}
					tabIndex={-1}
					aria-label="Open calendar"
					style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
				>
					<Image
						src="/icon/calender.svg"
						alt="Calendar"
						width={16}
						height={16}
						className="opacity-60 cursor-pointer"
					/>
				</button>
			);
		}

		if (icon) {
			return <div className="input-icon">{icon}</div>;
		}

		return null;
	};

	return (
		<div className={allClasses}>
			{label && (
				<label className="input-label" htmlFor={props.id}>
					{label}
					{required && <span className="text-[var(--error-normal)] ml-1">*</span>}
				</label>
			)}

			<div className="relative">
				<input
					ref={(node) => {
						inputRef.current = node;
						if (typeof ref === 'function') {
							ref(node);
						} else if (ref) {
							ref.current = node;
						}
					}}
					type={inputType}
					className={`input-field ${className}`}
					disabled={isDisabled}
					required={required}
					aria-invalid={hasError}
					aria-describedby={errorMessage ? helperTextId : undefined}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={handleChange}
					onInvalid={handleInvalid}
					{...props}
					placeholder={type === 'date' ? 'YYYY - MM - DD' : placeholder}
				/>
				{renderIcon()}
			</div>

			{errorMessage && (
				<div id={helperTextId} className={`input-helper ${getHelperTextClass()}`} role={hasError ? "alert" : undefined}>
					{errorMessage}
				</div>
			)}
		</div>
	);
});

Input.displayName = 'Input';

export default Input;
