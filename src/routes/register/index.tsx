import React from 'react';
import { useSelector } from 'react-redux';
import Field from '../../components/Field';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../components/Button';
import { useAppDispatch } from '../../app/store';
import { signUp, signUpSelector } from '../../app/slices/signUp';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

type RegisterFields = 'username' | 'email' | 'password' | 'confirm_password';
type RegisterValues = Record<RegisterFields, string>;

const validationSchema: yup.SchemaOf<RegisterValues> = yup.object({
	username: yup
		.string()
		.matches(/^!(?=.*[!@#\\$%\\^&\\*])/, 'No special characters allowed')
		.matches(/^(?=.{8,})/, 'Must Contain 6 Characters')
		.required('required'),
	email: yup.string().email('invalid email').required('required'),
	password: yup
		.string()
		.matches(/^(?=.*[a-z])/, 'One Lowercase required')
		.matches(/^(?=.*[A-Z])/, 'One Uppercase required')
		.matches(/^(?=.*[!@#\\$%\\^&\\*])/, 'One Special Case Character required')
		.matches(/^(?=.*[0-9])/, 'One Number required')
		.matches(/^(?=.{8,})/, 'Must Contain 8 Characters')
		.required('required'),
	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('required'),
});

const RegisterPage = () => {
	const dispatch = useAppDispatch();
	const { loading, error } = useSelector(signUpSelector);
	const formik = useFormik<RegisterValues>({
		validationSchema,
		initialValues: {
			username: '',
			email: '',
			password: '',
			confirm_password: '',
		},
		validateOnChange: false,
		onSubmit: ({ username, email, password }) => {
			dispatch(
				signUp({
					username,
					email,
					password,
				})
			);
		},
	});

	const { handleChange, handleSubmit, values, errors, isValid } = formik;
	return (
		<div className="flex h-full w-full items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="relative my-0 mx-auto flex flex-col gap-4 rounded-2xl bg-white px-4 py-8 shadow-md desktop:w-[400px]"
			>
				{loading == 'pending' && <Spinner className="absolute top-2 right-0" />}
				<h1 className="text-center text-xl text-slate-500">Sign Up</h1>
				<div className="mx-auto flex flex-col gap-4 desktop:w-[300px]">
					<Field
						name={'username'}
						label={'Username'}
						error={errors.username}
						inputProps={{
							value: values.username,
							onChange: handleChange,
						}}
					/>
					<Field
						name={'email'}
						label={'Email'}
						error={errors.email}
						inputProps={{
							value: values.email,
							onChange: handleChange,
						}}
					/>
					<Field
						name={'password'}
						label={'Password'}
						error={errors.password}
						inputProps={{
							type: 'password',
							value: values.password,
							onChange: handleChange,
						}}
					/>
					<Field
						name={'confirm_password'}
						label={'Confirm Password'}
						error={errors.confirm_password}
						inputProps={{
							type: 'password',
							value: values.confirm_password,
							onChange: handleChange,
						}}
					/>
					{error && (
						<div className="rounded border border-red-200 bg-red-100 p-2">
							<h4 className="text-lg font-bold text-red-400">Ouch!</h4>
							<p className="text-sm font-light text-red-400">{error.message}</p>
						</div>
					)}
					<Button disabled={!isValid || loading == 'pending'}>Submit</Button>
					<p className="text-sm font-light">
						Already have an account?{' '}
						<Link className="text-green-400 underline" to="/login">
							sign in
						</Link>{' '}
						here!
					</p>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
