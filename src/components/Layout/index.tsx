import clsx from 'clsx';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout: FC = () => {
	return (
		<div className="flex h-full flex-col">
			<Header />
			<main
				className={clsx(
					'h-[93%]',
					'relative',
					'bg-slate-800',
					'mt-[1px]',
					'overflow-auto'
				)}
			>
				<div
					className={clsx('h-full', 'm-auto', 'p-5', 'container', 'max-w-5xl')}
				>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
