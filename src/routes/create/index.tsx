import clsx from 'clsx'
import React, { useEffect } from 'react'
import EditorJS from '@editorjs/editorjs';
import Button from '../../components/Button'

type Props = {}

const CreatePage = (props: Props) => {
  useEffect(() => {
    const editorjs = new EditorJS({
      holder: 'editorjs',
      minHeight: 100,
    })

  }, [])
  return (
    <div className='relative h-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <span className='mb-2 text-sm font-extralight text-slate-300'>Title:</span>
          <input 
            className={clsx(
              'appearance-none outline-none text-green-500 text-2xl bg-transparent p-1',
              'border-b border-b-slate-600',
            )} 
            placeholder='Catchy title here...' 
            type="text" 
          />
        </div>
        <div className='flex flex-col'>
          <span className='mb-2 text-sm font-extralight text-slate-300'>Content:</span>
          <div className='bg-slate-300' id='editorjs'/>
        </div>
          
        <label className='flex flex-col'>
            <span className='mb-2 text-sm font-extralight text-slate-300'>Post thumbnail:</span>
            <input 
              type="file" 
              className={clsx(
                "text-sm text-slate-300",
                "file:mr-5 file:py-2 file:px-6",
                "file:rounded-full file:border-0",
                "file:text-sm file:font-medium",
                "file:bg-blue-50 file:text-slate-700",
                "hover:file:cursor-pointer hover:file:bg-green-50",
                "hover:file:text-green-500"
              )}
           />
        </label>
      </div>
      <div className='fixed bottom-10 left-0 w-full grid place-items-center'>
        <Button className='py-3 px-11 text-md'>Create post</Button>
      </div>
    </div>
  )
}

export default CreatePage