import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../app/slices/auth';

const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {
	const { isLoggedIn } = useSelector(authSelector);

	// show unauthorized screen if no user is found in redux store
	if (!isLoggedIn) {
		return (
			<div className="p-8">
				<h1 className="text-4xl text-slate-300">
					Unauthorized <span className="text-green-600">{':('}</span>
				</h1>
				<p className="text-lg font-light text-slate-400">
					<NavLink className="text-slate-300 hover:underline" to="/login">
						login
					</NavLink>{' '}
					to gain access
				</p>
			</div>
		);
	}

	// returns child route elements
	return children;
};
export default ProtectedRoute;
