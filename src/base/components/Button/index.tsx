import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
		className?: string,
		children?: React.ReactNode,
		onClick?: (event?: React.SyntheticEvent<HTMLButtonElement>) => void,
		disabled?: boolean,
		fluid?: boolean,
		type?: 'button' | 'submit' | 'reset',
		size?: 'small-85' | 'middle-105',
		isLoading?: boolean,
	}

export function Button({
	className, onClick, disabled, type = 'button', children, size, fluid, isLoading,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={cx(
				styles.button,
				{
					[styles['button--fluid']]: fluid,
					[styles[`button--size--${size || ''}`]]: size,
				},
				className,
			)}
		>
			{children}
		</button>
	);
}

export default null;
