import React from 'react';
import styles from './MainLayout.module.scss';
import {Header} from "../../containers/Header";

interface OwnProps {
  children?: any,
}

interface MainModuleLayoutProps extends OwnProps {
  location?: string,
}


export function MainModuleLayout({
	children,
}: MainModuleLayoutProps) {

	return (
		<div className={styles.main_layout}>
			<Header />
				<div className={styles.content}>
					{children}
				</div>
		</div>
	);
}

export default null;
