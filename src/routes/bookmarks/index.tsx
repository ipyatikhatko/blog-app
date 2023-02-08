import React from 'react'
import ArticlePreview from '../../components/ArticlePreview'

type Props = {}

const BookmarksPage = (props: Props) => {
  return (
    <div className='w-2/3 flex flex-col gap-4 mobile:w-full relative'>
        <h1 className='sticky top-5 left-5 shadow-md w-fit text-2xl font-[700] bg-slate-500 text-green-50 px-4 rounded-full mb-4'>Recently added</h1>
        <div className='flex flex-col gap-8 mobile:p-5'>
          <ArticlePreview/>
          <ArticlePreview/>
          <ArticlePreview/>
          <ArticlePreview/>
        </div>
    </div>
  )
}

export default BookmarksPage