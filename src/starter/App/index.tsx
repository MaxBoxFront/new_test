import React, {useEffect} from 'react';
import {BaseRouter} from "starter/routes";
import styles from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {BaseState} from "../../base/types";
import {getUsersAction} from "../../store/Users/actions";
import {authLoginAction} from "../../store/Auth/actions";
import LoaderSpinner from "../../base/components/LoaderSpinner";


export const App = () => {
  const dispatch = useDispatch();
  const {
    base: { auth: {loginReq},} } = useSelector((state: BaseState) => state);

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("email");
    if(savedEmail && savedEmail !== '') {
      dispatch(authLoginAction({email: savedEmail, password: '1'}))
    }
  }, [])

  useEffect(() => {
    getUsersAction();
  }, [])

  return (
    <div className={styles.app}>
      {loginReq.isLoading ? <LoaderSpinner/> : <BaseRouter/> }
    </div>
  );
}
