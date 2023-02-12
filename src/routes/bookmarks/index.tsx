import React from 'react';
import ArticlePreview from '../../components/ArticlePreview';

const BookmarksPage = () => {
	return (
		<div className="relative flex w-full flex-col gap-4 mobile:w-full">
			<h1 className="sticky top-5 left-5 mb-4 w-fit rounded-full bg-slate-500 px-4 text-2xl font-[700] text-green-50 shadow-md">
				Bookmarks
			</h1>
			<div className="flex flex-col gap-8 mobile:p-5">
				<ArticlePreview />
				<ArticlePreview />
				<ArticlePreview />
				<ArticlePreview />
			</div>
		</div>
	);
};

export default BookmarksPage;
