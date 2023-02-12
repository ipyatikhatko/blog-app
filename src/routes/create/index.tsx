import Checklist from '@editorjs/checklist';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import Button from '../../components/Button';
import './styles.css';

const editorInitialData = {
	time: 1552751755369,
	blocks: [
		{
			type: 'header',
			data: {
				text: 'Amazing header content',
			},
		},
		{
			type: 'paragraph',
			data: {
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet fugiat libero ducimus deserunt? Asperiores pariatur expedita possimus placeat cum!',
			},
		},
	],
};

const editorConfig = {
	holder: 'editorjs',
	minHeight: 100,
	tools: {
		header: Header,
		checklist: Checklist,
	},
	data: editorInitialData,
};

const CreatePage = () => {
	const editorRef = useRef<EditorJS | null>(null);

	const handleCreate = () => {
		editorRef.current
			?.save()
			.then((outputData) => {
				console.log('Article data: ', outputData);
			})
			.catch((error) => {
				console.log('Saving failed: ', error);
			});
	};

	useEffect(() => {
		const editor = new EditorJS(editorConfig);
		editorRef.current = editor;
		return () => {
			if (editor) {
				editor.destroy();
			}
		};
	}, []);
	return (
		<div className="relative h-full">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col">
					<span className="mb-2 text-sm font-extralight text-slate-300">
						Title:
					</span>
					<input
						className={clsx(
							'appearance-none bg-transparent p-1 text-2xl text-green-500 outline-none',
							'border-b border-b-slate-600'
						)}
						placeholder="Catchy title here..."
						type="text"
					/>
				</div>
				<div className="flex flex-col">
					<span className="mb-2 text-sm font-extralight text-slate-300">
						Content:
					</span>
					<div className="content">
						<div className="rounded bg-slate-300" id="editorjs" />
					</div>
				</div>
				<label className="flex flex-col">
					<span className="mb-2 text-sm font-extralight text-slate-300">
						Post thumbnail:
					</span>
					<input
						type="file"
						className={clsx(
							'text-sm text-slate-300',
							'file:mr-5 file:py-2 file:px-6',
							'file:rounded-full file:border-0',
							'file:text-sm file:font-medium',
							'file:bg-blue-50 file:text-slate-700',
							'hover:file:cursor-pointer hover:file:bg-green-50',
							'hover:file:text-green-500'
						)}
					/>
				</label>
			</div>
			<div className="fixed bottom-10 left-0 grid w-full place-items-center">
				<Button onClick={handleCreate} className="text-md py-3 px-11 shadow-md">
					Create post
				</Button>
			</div>
		</div>
	);
};

export default CreatePage;
