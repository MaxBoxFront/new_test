import React from 'react';
import styles from './AuthLayout.module.scss';

interface OwnProps {
  children?: any,
}

interface AuthModuleLayoutProps extends OwnProps {}


export function AuthModuleLayout({
	children,
}: AuthModuleLayoutProps) {


	return (
		<div className={styles.main_layout}>
				<div className={styles.content}>
					{children}
				</div>
		</div>
	);
}

export default null;
