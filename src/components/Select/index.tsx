import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { useEffect } from 'react';
import ExpandIcon from 'public/forms/expand.svg';

export type SelectOption = {
	label: string;
	value: string;
};

interface SelectProps {
	multiple?: boolean;
	label: string;
	name: string;
	options: SelectOption[];
	error?: string;
	onChange: (value: SelectOption | SelectOption[]) => void;
}

export const Select: React.FC<SelectProps> = ({
	multiple,
	label,
	name,
	error,
	options,
	onChange,
}) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);
	const [selectedMultiple, setSelectedMultiple] = useState<SelectOption[]>([]);

	const isSelected = (option: SelectOption) =>
		selected.value == option.value && !multiple;
	const isMultiSelected = (option: SelectOption) =>
		selectedMultiple.some((o) => o.value == option.value);

	const handleMultipleRemove = (option: SelectOption) => {
		// handle removing for multiple select
		const removed = [...selectedMultiple].filter(
			(o) => o.value != option.value
		);
		onChange(removed);
		setSelectedMultiple(removed);
	};

	const handleChange = (option: SelectOption) => {
		if (multiple) {
			if (selectedMultiple.some((o) => o.value == option.value)) {
				handleMultipleRemove(option);
				return;
			}

			setSelectedMultiple([...selectedMultiple, option]);
			onChange([...selectedMultiple, option]);
			return;
		}

		onChange(option);
		setSelected(option);
	};

	useEffect(() => {
		if (!multiple) {
			setOpen(false);
			return;
		}
	}, [selected, multiple]);

	return (
		<div className="w-full">
			<label htmlFor={name} className="w-full">
				<p
					className={clsx(
						'text-dark text-sm font-[500]',
						error && 'text-green-400'
					)}
				>
					{label}
				</p>
				<div className="relative">
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className={clsx(
							'h-10',
							'w-full',
							'outline-none',
							'border',
							'rounded-2xl',
							'px-3',
							'py-2',
							'border-grey-300',
							'bg-light',
							'flex',
							'items-center',
							'justify-between',
							'cursor-pointer',
							'hover:border-green-400',
							'focus:border-green-600',
							error && 'border-green-400'
						)}
					>
						<span
							className={clsx(
								'block truncate text-left',
								!selected && 'invisible'
							)}
						>
							{multiple
								? selectedMultiple.map((o) => o.label).join(', ')
								: selected?.label}
						</span>
						<ExpandIcon />
					</div>
					{open && (
						<div
							onMouseLeave={() => setOpen(false)}
							className={clsx(
								'z-50',
								'mt-2',
								'absolute',
								'w-full',
								'bg-light',
								'border',
								'rounded',
								'border-grey-300',
								'max-h-[200px]',
								'overflow-y-auto'
							)}
						>
							{options.map((option) => {
								if (option.value) {
									return (
										<div
											key={option.value}
											onClick={() => handleChange(option)}
											className={clsx(
												'relative cursor-pointer select-none px-3 py-2',
												'flex items-center justify-between',
												'hover:bg-grey-100',
												isSelected(option) && 'bg-grey-200'
											)}
										>
											<span className="block truncate">{option.label}</span>
											{isMultiSelected(option) && (
												<div className="bg-grey-500 h-2 w-2 rounded-full" />
											)}
										</div>
									);
								}
								return <div key={option.value} className="hidden" />;
							})}
						</div>
					)}
				</div>
			</label>
			{error && <p className="text-xs text-green-500">{error}</p>}
		</div>
	);
};
