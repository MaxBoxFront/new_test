import React, {useEffect, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './Header.module.scss';
import {BaseState} from "base/types";
import {Button} from "base/components/Button";
import {getUsersAction} from "store/Users/actions";
import {icons} from "base/assets/icons/icons";
import mainModuleRoutes from "base/constants/routes/mainModuleRoutes";
import {authLogoutAction} from "store/Auth/actions";
import authModuleRoutes from "base/constants/routes/authModuleRoutes";
import {getAccountAction} from 'store/Account/actions';

type HeaderProps = {};


export const Header = ({}: HeaderProps) => {
  const dispatch = useDispatch();
  const history = useNavigate();


  const {
    base: {auth: {email}, users: {users}, account: {account}},
  } = useSelector((state: BaseState) => state);

  const isShowButton = useMemo(() => {
    if (window.location.pathname === '/') {
      return true;
    }
  }, [window.location.pathname])

  useEffect(() => {
    if (users.data.length === 0)
    dispatch(getUsersAction());
  }, [])

  const accountData = users?.data?.filter((user) => user.email === email)
  console.log('accountData = ', accountData[0]?.id)
  console.log('accountState = ', account?.data)

  useEffect(() => {
    if (users.data.length !== 0 && accountData[0]?.id) {
      dispatch(getAccountAction(accountData[0]?.id))
    }
  }, [users.data])

  const redirectToMainPageHandler = () => {
    history(mainModuleRoutes.home.root)
  }

  const logoutHandler = () => {
    dispatch(authLogoutAction());
    sessionStorage.clear();
    history(authModuleRoutes.root)
  }

  return (
    <div className={styles.header}>
          <div className={styles.back_button}>
            {!isShowButton ? <Button size={"middle-105"} onClick={redirectToMainPageHandler}>
              <img className={styles.button_image} src={icons.backIcon} alt=""/>
              Main page
            </Button> : <div className={styles.empty_button}/>}
          </div>
          <div className={styles.main_info}>
            <img className={styles.image} src={account?.data?.avatar} alt=""/>
            <div className={styles.info_block}>
              <h1 className={styles.name}> {`${account?.data?.first_name} ${account?.data?.last_name}`} </h1>
              <h4 className={styles.email}> {account?.data?.email} </h4>
            </div>
          </div>
          <div className={styles.logout_block}>
            <Button size={"small-85"} onClick={logoutHandler}>
              Logout
              <img src={icons.logoutIcon} alt=""/>
            </Button>
          </div>
    </div>
  );
};
export default null;
