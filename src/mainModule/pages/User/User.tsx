import React, {useEffect} from 'react';
import styles from './User.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserAction} from "store/User/actions";
import {BaseState} from "base/types";
import LoaderSpinner from "../../../base/components/LoaderSpinner";

export const User = () => {
  const dispatch = useDispatch();
  const {userId} = useParams();

  const {
    base: {
      user: {user},
    },
  } = useSelector((state: BaseState) => state);

  useEffect(() => {
   dispatch(getUserAction(userId));
  }, [userId])

  return (
    <div className={styles.user}>
      {user.isLoading ? <LoaderSpinner/> :
        <>
      <img className={styles.image} src={ user?.data?.avatar} alt={''}/>
      <table className={styles.table}>
        <caption>
          <h3>User data</h3>
        </caption>
        <thead>
        <tr>
        <th>id</th>
        <th> email</th>
        <th> firstname</th>
        <th> lastname</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>{user?.data?.id}</th>
        <th> {user?.data?.email}</th>
        <th> {user?.data?.first_name}</th>
        <th> {user?.data?.last_name}</th>
        </tr>
        </tbody>
      </table>
        </>}
    </div>
  );
};

export default null;