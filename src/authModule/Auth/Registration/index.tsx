import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { useFormik } from 'formik';
import {object, string} from "yup";
import {Input} from "base/components/Input";
import {Button} from "base/components/Button";
import {registrationAction} from "store/Registration/actions";
import authRoutes from "base/constants/routes/authModuleRoutes";
import {NavLink} from "react-router-dom";
import {BaseState} from "../../../base/types";
import LoaderSpinner from "../../../base/components/LoaderSpinner";
import styles from '../Auth.module.scss'

type RegistrationProps = {};

interface RegistrationFieldsType {
	username: string,
  email: string,
  password: string,
}

export const initialValues = {
	username: '',
	email: '',
	password: '',
};

const validationSchema = object().shape({
	username: string().required('This field is required'),
	email: string().required('This field is required'),
	password: string().required('This field is required'),
});

export const Registration = ({}: RegistrationProps) => {
	const dispatch = useDispatch();
	const {base: {auth ,registration: {register}}} = useSelector((state: BaseState) => state)

	const {
		handleChange,
		handleSubmit,
		values,
		setErrors,
		errors,
		touched,
	} = useFormik<RegistrationFieldsType>({
		initialValues,
		onSubmit: (values) => {
			console.log('onSubmit =', values)
			dispatch(registrationAction(values));
		},
		validationSchema,
		validateOnMount: true,
	});

	const onChangeHandler = React.useCallback(
		({ name, value }: any) => {
			const event = {
				target: { name, value },
			};
			setErrors(name);
			handleChange(event);
		},
		[
			handleChange,
		],
	);

	return (
		<div className={styles.form}>
			{register.isLoading || auth.loginReq.isLoading ? <LoaderSpinner /> :
				<div className={styles.form_content}>
					<h2>Create account</h2>
					<Input
						className={styles.input}
						name="username"
						value={values.username}
						label={errors.username}
						placeholder="Username"
						onChange={onChangeHandler}
						touched={touched.username}
						fluid
						disabled={register.isLoading}
					/>
					<Input
						className={styles.input}
						name="email"
						value={values.email}
						label={errors.email}
						placeholder="Email"
						onChange={onChangeHandler}
						touched={touched.email}
						fluid
						disabled={register.isLoading}
					/>
					<Input
						className={styles.input}
						name="password"
						value={values.password}
						label={errors.password}
						placeholder="Password"
						onChange={onChangeHandler}
						touched={touched.password}
						required
						fluid
						disabled={register.isLoading}
					/>
					<Button
						className={styles.button}
						fluid
						onClick={() => handleSubmit()}
						disabled={register.isLoading}
					>
						Create account
					</Button>
					<NavLink className={styles.link} to={authRoutes.authorization.root}	>
						Go to login
					</NavLink>
				</div>}
			</div>
	);
};

