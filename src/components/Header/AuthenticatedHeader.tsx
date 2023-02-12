import React from 'react';
import { FiBookmark, FiLogOut, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authSelector, signOut } from '../../app/slices/auth';
import { useAppDispatch } from '../../app/store';
import Button from '../Button';

const AuthenticatedHeader = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useSelector(authSelector);
	const dispatch = useAppDispatch();
	const handleSignOut = () => {
		dispatch(signOut(null));
	};

	if (!isLoggedIn) {
		navigate('/login');
	}

	return (
		<>
			<Button variant="contained">
				<span>Create</span>
			</Button>
			<Link to="/bookmarks">
				<div className="cursor-pointer rounded-full p-3 hover:bg-slate-700">
					<FiBookmark className="text-xl" />
				</div>
			</Link>
			<Link to="/profile">
				<div className="cursor-pointer rounded-full p-3 hover:bg-slate-700">
					<FiUser className="text-xl" />
				</div>
			</Link>
			<div
				className="cursor-pointer rounded-full p-3 hover:bg-slate-700"
				onClick={handleSignOut}
			>
				<FiLogOut className="text-xl" />
			</div>
		</>
	);
};

export default AuthenticatedHeader;
