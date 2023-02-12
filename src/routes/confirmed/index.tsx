import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedPage = () => {
	return (
		<div className="grid h-full place-items-center">
			<div className="rounded-2xl bg-white p-4 shadow-md desktop:w-[400px]">
				<h1 className="text-xl text-green-400">Email is confirmed!</h1>
				<p className="text-sm font-light">
					you can{' '}
					<Link className="text-green-400 underline" to="/login">
						login
					</Link>{' '}
					now
				</p>
			</div>
		</div>
	);
};

export default ConfirmedPage;
