import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {string, object} from 'yup';
import {BaseState} from "base/types";
import {Input} from "base/components/Input";
import {Button} from "base/components/Button";
import {authLoginAction} from "store/Auth/actions";
import {NavLink, useNavigate} from "react-router-dom";
import LoaderSpinner from "base/components/LoaderSpinner";
import styles from '../Auth.module.scss'
import authRoutes from "base/constants/routes/authModuleRoutes";
import mainModuleRoutes from "base/constants/routes/mainModuleRoutes";



type LoginProps = {};

interface LoginFieldsType {
  email: string,
  password: string,
}

export const initialValues = {
	email: '',
	password: '',
};

const validationSchema = object().shape({
	email: string().required('This field is required'),
	password: string().required('This field is required'),
});

export const Login = ({}: LoginProps) => {
	const {base: {auth}} = useSelector(( state : BaseState) => state);
	const dispatch = useDispatch();
	const history = useNavigate();

	const {
		handleChange,
		handleSubmit,
		values,
		setErrors,
		errors,
		touched,
	} = useFormik<LoginFieldsType>({
		initialValues,
		onSubmit: (values) => {
			console.log('handle login = ', values)
			dispatch(authLoginAction(values))
			sessionStorage.setItem("email", values.email);
			history(mainModuleRoutes.home.root)
		},
		validationSchema,
		validateOnMount: true,
	});

	const onChangeHandler = React.useCallback(
		({ name, value }: any) => {
			const event = {
				target: { name, value },
			};
			handleChange(event);
		},
		[
			handleChange,
		],
	);

	const sendLoginFormHandler = () => {
		dispatch(authLoginAction({email: values.email, password: values.password}))
		sessionStorage.setItem("email", values.email);
		history(mainModuleRoutes.home.root)
	}

	return (
		<div className={styles.form}>
			{auth.loginReq.isLoading && <LoaderSpinner />}
			<div className={styles.form_content}>
				<h2>Authorization</h2>
				<Input
					className={styles.input}
					name="email"
					value={values.email}
					label={errors.email}
					placeholder="Email"
					onChange={onChangeHandler}
					touched={touched.email}
					fluid
					disabled={auth.loginReq.isLoading}
				/>
				<Input
					className={styles.input}
					name="password"
					value={values.password}
					label={errors.password}
					placeholder="Password"
					onChange={onChangeHandler}
					touched={touched.password}
					fluid
					disabled={auth.loginReq.isLoading}
				/>
				<Button
					className={styles.button}
					fluid
					// onClick={sendLoginFormHandler}
					onClick={() => handleSubmit()}
					disabled={auth.loginReq.isLoading}
				>
					Login
				</Button>
				<NavLink className={styles.link} to={authRoutes.registration.root}	>
					Back to registration
				</NavLink>
			</div>
		</div>
	);
}
