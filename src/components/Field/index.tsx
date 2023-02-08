import clsx from 'clsx';
import React, { FC } from 'react'
import { HTMLProps } from 'react';

type FieldProps = {
  name: string;
  label: string;
  inputProps?: HTMLProps<HTMLInputElement>,
  error?: string;
  css?: string;
}

const Field:FC<FieldProps> = ({
  name,
  label,
  inputProps,
  error,
  css
}) => {
  
  return (
    <div className='w-full'>
      <label className={clsx('w-full', css)} htmlFor={name}>
        <div className='min-w-[100px]'>
          <p className={clsx('font-[500] text-sm text-slate-500', error && 'text-slate-400')}>
            {label}
          </p>
        </div>
        <input 
          className={clsx(
            'h-8 w-full rounded outline-none outline-offset-0 duration-300 transition-all border border-slate-200 px-3 py-2 bg-slate-100',
            'hover:border-slate-400',
            'focus:border-green-500',
            'disabled:border-slate-300 disabled:bg-slate-300 disabled:text-slate-500',
            error && 'outline-red-400'
          )} 
          type='text' 
          name={name}
          {...inputProps} 
        />
      </label>
      {error && (
        <p className='text-slate-500 text-xs'>{error}</p>
      )}
    </div>
  )
}

export default Field