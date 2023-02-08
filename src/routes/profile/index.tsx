import React from 'react'
import { FiCamera, FiEdit } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { authSelector } from '../../app/slices/auth'
import Field from '../../components/Field'

const ProfilePage = () => {
  const { user } = useSelector(authSelector);
  return (
    <div className='min-h-full py-10'>
      <div className='bg-slate-200 rounded-2xl p-5 min-h-[80vh]'>
        <div className='flex gap-8 flex-col mobile:justify-center items-center'>
          <div className='cursor-pointer group h-[100px] w-[100px] rounded-full bg-slate-300 grid place-items-center'>
            <FiCamera className='h-[30px] w-[30px] text-slate-500 group-hover:text-green-500 group-hover:backdrop:blur-sm'/>
          </div>
          <div className='flex flex-col gap-5'>
            <Field
             name='username' 
             label='Username'
             inputProps={{
              disabled: true,
              value: user?.user_metadata.username
             }}
            />
            <Field 
              inputProps={{
                disabled: true,
                value: user?.user_metadata.email
              }}
              name='email' 
              label='Email'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage