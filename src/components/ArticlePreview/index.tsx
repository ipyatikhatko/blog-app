import React, { FC } from 'react'
import { FiBookmark } from 'react-icons/fi'
import { formatDate } from '../../utils/dateformat'
import Chip from '../Chip'

type ArticlePreviewProps = {}

const ArticlePreview: FC<ArticlePreviewProps> = ({  }) => {
  return (
    <div className='group cursor-pointer border-l border-l-transparent hover:border-l-green-500 p-2 flex gap-2 mobile:flex-col-reverse'>
      <div className='min-w-[50%] flex-col py-2'>
        <div className='flex items-center justify-between mb-1 mobile:hidden'>
          <div className='flex gap-2'>
            <div className='h-6 w-6 rounded-full bg-slate-400'>
              {/* Publisher image goes here */}
            </div>
            <p className='text-sm text-green-500 mobile:text-xs'>username</p>
          </div>
          <div className='group-hover:text-slate-500 group-hover:opacity-100 cursor-pointer hover:bg-slate-700 opacity-0 transition-opacity p-1 rounded mr-4'>
            <FiBookmark title='Add to bookmarks' size={20}/>
          </div>
        </div>
        <h1 className='text-slate-200 text-xl font-[700] truncate mb-2 mobile:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='line-clamp-2 text-slate-300 text-md font-light mb-1 mobile:text-sm'>
          Here's a block of text from a blog post that isn't conveniently three lines long like you designed
          for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
          things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
          wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
          SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
          your cousin went to high school with before the show starts, and you're gonna miss it if you're
          not there early.
        </p>
        <div className='flex items-center gap-2 text-slate-500 font-light text-sm mobile:text-xs'>
          <span>
            {formatDate(new Date().getTime())}
          </span>
          <span>&middot;</span>
          <span>
            52 min read
          </span>
          <span>&middot;</span>
          <Chip label='Category'/>
        </div>
      </div>
      <div className='min-w-[250px] mobile:h-[200px] grid place-items-center bg-slate-400 overflow-hidden'>
        Image
      </div>
      <div className='items-center gap-2 mb-1 hidden mobile:flex'>
        <div className='h-6 w-6 rounded-full bg-slate-400'>
          {/* Publisher image goes here */}
        </div>
        <p className='text-sm text-green-500 mobile:text-xs'>username</p>
      </div>
    </div>
  )
}

export default ArticlePreview