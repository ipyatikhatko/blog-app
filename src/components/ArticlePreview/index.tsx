import React, { FC } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { formatDate } from '../../utils/dateformat';
import Chip from '../Chip';

const ArticlePreview: FC = () => {
	return (
		<div className="group flex cursor-pointer gap-2 border-l border-l-transparent p-2 hover:border-l-green-500 mobile:flex-col-reverse">
			<div className="min-w-[50%] flex-col py-2">
				<div className="mb-1 flex items-center justify-between mobile:hidden">
					<div className="flex gap-2">
						<div className="h-6 w-6 rounded-full bg-slate-400">
							{/* Publisher image goes here */}
						</div>
						<p className="text-sm text-green-500 mobile:text-xs">username</p>
					</div>
					<div className="mr-4 cursor-pointer rounded p-1 opacity-0 transition-opacity hover:bg-slate-700 group-hover:text-slate-500 group-hover:opacity-100">
						<FiBookmark title="Add to bookmarks" size={20} />
					</div>
				</div>
				<h1 className="mb-2 truncate text-xl font-[700] text-slate-200 mobile:text-lg">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</h1>
				<p className="text-md mb-1 font-light text-slate-300 line-clamp-2 mobile:text-sm">
					Here's a block of text from a blog post that isn't conveniently three
					lines long like you designed for originally. It's probably like 6
					lines on mobile or even on desktop depending on how you have things
					laid out. Truly a big pain in the derriere, and not the sort of thing
					you expected to be wasting your time trying to deal with at 4:45pm on
					a Friday am I right? You've got tickets to SmackDown and you heard
					there's gonna be a dark match with that local guy from two towns over
					that your cousin went to high school with before the show starts, and
					you're gonna miss it if you're not there early.
				</p>
				<div className="flex items-center gap-2 text-sm font-light text-slate-500 mobile:text-xs">
					<span>{formatDate(new Date().getTime())}</span>
					<span>&middot;</span>
					<span>52 min read</span>
					<span>&middot;</span>
					<Chip label="Category" />
				</div>
			</div>
			<div className="grid min-w-[250px] place-items-center overflow-hidden bg-slate-400 mobile:h-[200px]">
				Image
			</div>
			<div className="mb-1 hidden items-center gap-2 mobile:flex">
				<div className="h-6 w-6 rounded-full bg-slate-400">
					{/* Publisher image goes here */}
				</div>
				<p className="text-sm text-green-500 mobile:text-xs">username</p>
			</div>
		</div>
	);
};

export default ArticlePreview;
