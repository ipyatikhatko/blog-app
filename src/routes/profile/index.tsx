import React from 'react';
import { FiCamera } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { authSelector } from '../../app/slices/auth';
import Field from '../../components/Field';

const ProfilePage = () => {
	const { user } = useSelector(authSelector);
	return (
		<div className="min-h-full py-10">
			<div className="min-h-[80vh] rounded-2xl bg-slate-200 p-5">
				<div className="flex flex-col items-center gap-8 mobile:justify-center">
					<div className="group grid h-[100px] w-[100px] cursor-pointer place-items-center rounded-full bg-slate-300">
						<FiCamera className="h-[30px] w-[30px] text-slate-500 group-hover:text-green-500 group-hover:backdrop:blur-sm" />
					</div>
					<div className="flex flex-col gap-5">
						<Field
							name="username"
							label="Username"
							inputProps={{
								disabled: true,
								value: user?.user_metadata.username,
							}}
						/>
						<Field
							inputProps={{
								disabled: true,
								value: user?.user_metadata.email,
							}}
							name="email"
							label="Email"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
