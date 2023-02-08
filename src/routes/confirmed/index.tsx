import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const ConfirmedPage = (props: Props) => {
  return (
    <div className='h-full grid place-items-center'>
      <div className='p-4 desktop:w-[400px] rounded-2xl shadow-md bg-white'>
        <h1 className='text-xl text-green-400'>Email is confirmed!</h1>
        <p className='font-light text-sm'>you can <Link className='text-green-400 underline' to='/login'>login</Link> now</p>
      </div>
    </div>
  )
}

export default ConfirmedPage