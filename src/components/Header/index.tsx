import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { authSelector, signOut } from '../../app/slices/auth';
import AuthenticatedHeader from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button';
import { useAppDispatch } from '../../app/store';

const Header = () => {
	const dispatch = useAppDispatch();
	const [mobileMenu, setMobileMenu] = useState(false);
	const { isLoggedIn } = useSelector(authSelector);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	const handleSignOut = () => {
		dispatch(signOut(null));
	};

	const handleNavigate = (to: string) => {
		navigate(to);
		if (mobileMenu) {
			setMobileMenu(false);
		}
	};

	return (
		<>
			<header className="z-50 h-[7%] bg-slate-800 shadow-lg shadow-slate-900">
				<div className="container m-auto flex h-full max-w-5xl items-center justify-between px-5">
					<div className="flex h-full w-full items-center justify-start">
						<Link to="/">
							<h1 className="text-xl font-[600] text-green-500">Blogg</h1>
						</Link>
					</div>
					<div onClick={toggleMenu}>
						<FiMenu className="hidden text-green-500 mobile:block" size={30} />
					</div>
					<div className="flex items-center gap-2 text-green-500 mobile:hidden">
						{isLoggedIn ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
					</div>
				</div>
				<hr className="h-[1px] border-none bg-green-300" />
			</header>
			<AnimatePresence>
				{mobileMenu && (
					<motion.div
						initial={{ x: mobileMenu ? '100vw' : 0 }}
						animate={{ x: mobileMenu ? 0 : '100vw' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						exit={{ x: '100vw' }}
						className="fixed top-0 left-0 z-50 h-[100vh] w-[100vw] bg-slate-700"
					>
						<div className="flex h-full flex-col p-4">
							<div className="flex h-[10%] justify-end">
								<FiX
									onClick={() => setMobileMenu(false)}
									className="text-green-500"
									size={40}
								/>
							</div>
							<div className="flex h-[90%] flex-col justify-between">
								<div className="flex flex-col gap-8 text-3xl font-bold text-green-500">
									<Button
										variant="outlined"
										onClick={() => handleNavigate('/')}
									>
										Home
									</Button>
									{(isLoggedIn && (
										<>
											<Button
												variant="outlined"
												onClick={() => handleNavigate('/create')}
											>
												Create post
											</Button>
											<Button
												variant="outlined"
												onClick={() => handleNavigate('/bookmarks')}
											>
												Bookmarks
											</Button>
											<Button
												variant="outlined"
												onClick={() => handleNavigate('/profile')}
											>
												Profile
											</Button>
										</>
									)) || (
										<>
											<Button
												variant="outlined"
												onClick={() => handleNavigate('/register')}
											>
												Create post
											</Button>
											<Button
												variant="outlined"
												onClick={() => handleNavigate('/register')}
											>
												Bookmarks
											</Button>
										</>
									)}
								</div>
								<div className="flex flex-col items-center justify-center gap-4 text-2xl font-light">
									{(!isLoggedIn && (
										<>
											<Link className="w-full" to="/login">
												<Button className="w-full">Sign In</Button>
											</Link>
											<Link className="w-full" to="/login">
												<Button className="w-full" variant="outlined">
													Sign Up
												</Button>
											</Link>
										</>
									)) || (
										<Button
											onClick={handleSignOut}
											className="w-full"
											variant="outlined"
										>
											Sign Out
										</Button>
									)}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
