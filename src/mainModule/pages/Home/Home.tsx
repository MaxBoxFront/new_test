import React, {useEffect} from 'react';
import styles from './Home.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from 'store/Users/actions';
import {BaseState} from "base/types";
import {UserType} from "base/types/provider/base/user";
import hash from 'object-hash';
import {NavLink} from "react-router-dom";
import mainModuleRoutes from "base/constants/routes/mainModuleRoutes";
import LoaderSpinner from "base/components/LoaderSpinner";

export const Home = () => {
  const dispatch = useDispatch();

  const {
    base: { users: {users},}
  } = useSelector((state: BaseState) => state);

  useEffect(() => {
    if (users?.data?.length === 0)
      dispatch(getUsersAction());
  }, [users.data])

  return (
    <div className={styles.home}>
      {users.isLoading ? <LoaderSpinner /> :
      users?.data?.map((user: UserType) => (
        <div className={styles.user} key={hash(user)}>
          <NavLink to={`${mainModuleRoutes.user.root}/${user.id}`}>
            <img src={user.avatar} alt=""/>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default null;