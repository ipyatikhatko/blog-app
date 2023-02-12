import React from 'react';
import { useSelector } from 'react-redux';
import { FiBookmark } from 'react-icons/fi';
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
			<div className="mr-5 flex cursor-pointer items-center gap-2 rounded p-2 text-green-500 hover:bg-green-100">
				<FiBookmark className="text-xl" />
				<span className="text-xs">Bookmarks</span>
			</div>
			<Link to="/profile">
				<Button variant="contained">Profile</Button>
			</Link>
			<span>&middot;</span>
			<Button variant="outlined" onClick={handleSignOut}>
				Sign Out
			</Button>
		</>
	);
};

export default AuthenticatedHeader;
