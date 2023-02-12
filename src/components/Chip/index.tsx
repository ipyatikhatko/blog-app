import clsx from 'clsx';
import React, { FC } from 'react';

type ChipProps = {
	label: string;
	onClick?: () => void;
};

const Chip: FC<ChipProps> = ({ label, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'bg-slate-500 text-slate-300',
				'py-1 px-2',
				'rounded-full',
				'cursor-pointer',
				onClick && 'hover:bg-slate-200 hover:text-slate-600 ',
				'transition-colors duration-200'
			)}
		>
			<p className="text-center text-sm font-light">{label}</p>
		</div>
	);
};

export default Chip;
