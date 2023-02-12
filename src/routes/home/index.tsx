import React from 'react';
import ArticlePreview from '../../components/ArticlePreview';
import Chip from '../../components/Chip';

const categories = [
	'Programming',
	'Data Science',
	'Technology',
	'Self Improvement',
	'Writing',
	'Relationships',
	'Machine Learning',
	'Productivity',
	'Politics',
];

const HomePage = () => {
	return (
		<div className="flex h-full flex-row-reverse mobile:flex-col">
			<div className="w-1/3 justify-center px-5 mobile:mb-4 mobile:w-full mobile:p-0">
				<div className="sticky top-5">
					<h1 className="text-md mb-4 font-[600] text-green-400">
						Discover more of what matters to you:
					</h1>
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<Chip key={category} label={category} />
						))}
					</div>
				</div>
			</div>
			<div className="relative flex w-2/3 flex-col gap-4 mobile:w-full">
				<h1 className="sticky top-5 left-5 mb-4 w-fit rounded-full bg-slate-500 px-4 text-2xl font-[700] text-green-50 shadow-md">
					Recently added
				</h1>
				<div className="mb-4 flex flex-col gap-8 mobile:p-0">
					<ArticlePreview />
					<ArticlePreview />
					<ArticlePreview />
					<ArticlePreview />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
