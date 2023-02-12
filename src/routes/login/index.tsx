import React from 'react';
import { useSelector } from 'react-redux';
import Field from '../../components/Field';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../components/Button';
import { useAppDispatch } from '../../app/store';
import { authSelector, signIn } from '../../app/slices/auth';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';

type RegisterFields = 'email' | 'password'
type RegisterValues = Record<RegisterFields, string>

const validationSchema: yup.SchemaOf<RegisterValues> = yup.object({
	email: yup.string().email('invalid email').required('required'),
	password: yup.string()
		.matches(/^(?=.{8,})/, 'Must Contain 8 Characters')
		.required('required'),
});


const LoginPage = () => {
	const dispatch = useAppDispatch();
	const { loading, error, isLoggedIn } = useSelector(authSelector);
	const navigate = useNavigate();

	if(loading == 'succeeded' && isLoggedIn) {
		navigate('/');
	}

	const formik = useFormik<RegisterValues>({
		validationSchema,
		initialValues: {
			email: '',
			password: '',
		},
		validateOnChange: false,
		onSubmit: ({ email, password }) => {
			dispatch(signIn({
				email,
				password
			}));
		}
	});
	const { handleChange, handleSubmit, values, errors } = formik;

	return (
		<div className='h-full flex items-center justify-center'>
			<form 
				onSubmit={handleSubmit} 
				className='relative flex flex-col gap-4 desktop:w-[400px] bg-white p-4 my-0 mx-auto rounded-2xl shadow-md'
			>
				{loading == 'pending' && <Spinner className='absolute top-2 right-0'/>}
				<h1 className='text-center text-slate-500 text-xl'>Sign In</h1>
				<div className='flex flex-col gap-4 desktop:w-[300px] mx-auto'>
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
					{error && (
						<div className='bg-red-100 border border-red-200 rounded p-2'>
							<h4 className='font-bold text-lg text-red-400'>Ouch!</h4>
							<p className='font-light text-sm text-red-400'>{error.message}</p>
						</div>
					)}
					<Button>Submit</Button>
					<p className='font-light text-sm'>Doesn&lsquo;t have account? <Link className='text-green-400 underline' to='/register'>create</Link> one!</p>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;