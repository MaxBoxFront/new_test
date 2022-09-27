import React from 'react';
import { NavLink } from 'react-router-dom';
import mainModuleRoutes from "base/constants/routes/mainModuleRoutes";
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
  return (
    <div className={styles.error_page}>
      <div className={styles.header}>
        This page does not exist
      </div>
      <div className={styles.content}>
        <h2>ERROR 404</h2>
        <h3>This page does not exist</h3>
        <NavLink className={styles.link} to={mainModuleRoutes.home.root}>Go to main page</NavLink>
      </div>
    </div>
  );
};

export default null;