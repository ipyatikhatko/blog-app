import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const UnauthenticatedHeader = () => {
	return (
		<>
			<Link to="/register">
				<Button variant="ghost">Sign Up</Button>
			</Link>
			<span>&middot;</span>
			<Link to="/login">
				<Button>Sign In</Button>
			</Link>
		</>
	);
};

export default UnauthenticatedHeader;
