import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import BookmarksPage from './bookmarks';
import ConfirmedPage from './confirmed';
import CreatePage from './create';
import HomePage from './home';
import LoginPage from './login';
import ProfilePage from './profile';
import RegisterPage from './register';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/confirmed" element={<ConfirmedPage />} />
			<Route
				path="/profile"
				element={
					<ProtectedRoute>
						<ProfilePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/create"
				element={
					<ProtectedRoute>
						<CreatePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/bookmarks"
				element={
					<ProtectedRoute>
						<BookmarksPage />
					</ProtectedRoute>
				}
			/>
		</Route>
	)
);
