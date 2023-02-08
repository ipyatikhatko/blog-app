import React from 'react'
import ArticlePreview from '../../components/ArticlePreview'
import Chip from '../../components/Chip'

const categories = [
  'Programming',
  'Data Science',
  'Technology',
  'Self Improvement',
  'Writing',
  'Relationships',
  'Machine Learning',
  'Productivity',
  'Politics'
]

const HomePage = () => {
  return (
    <div className='h-full flex flex-row-reverse mobile:flex-col'>
      <div className='px-5 w-1/3 justify-center mobile:w-full mobile:mb-4 mobile:p-0'>
        <div className='sticky top-5'>
          <h1 className='text-md font-[600] text-green-400 mb-4'>Discover more of what matters to you:</h1>
          <div className='flex flex-wrap gap-2'>
            {categories.map(category => (
              <Chip 
                key={category} 
                onClick={() => {}} 
                label={category}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='w-2/3 flex flex-col gap-4 mobile:w-full relative'>
        <h1 className='sticky top-5 left-5 shadow-md w-fit text-2xl font-[700] bg-slate-500 text-green-50 px-4 rounded-full mb-4'>Recently added</h1>
        <div className='flex flex-col gap-8 mobile:p-0 mb-4'>
          <ArticlePreview/>
          <ArticlePreview/>
          <ArticlePreview/>
          <ArticlePreview/>
        </div>
      </div>
    </div>
  )
}

export default HomePage