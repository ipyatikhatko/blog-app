import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

type ButtonVariants = 'contained' | 'outlined' | 'ghost'
type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariants
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = 'contained' } = props;
  return (
    <button 
      {...props}
      className={
      clsx(
        'rounded-full',
        'cursor-pointer',
        'text-sm', 
        'py-1 px-2',
        'min-h-[38px]',
        'min-w-[80px]',
        'flex items-center justify-center',
        'border', 
        'border-transparent',
        'transition-colors',
        'duration-300',
        'disabled:cursor-not-allowed disabled:opacity-30',
        variant == 'contained' && [
          'bg-green-100',
          'text-green-500',
          'hover:text-green-600 hover:bg-green-200'
        ],
        variant == 'outlined' && [
          'bg-transparent',
          'text-green-500',
          'border-green-500',
          'hover:text-green-700 hover:bg-green-400',
        ],
        variant == 'ghost' && [
          'bg-transparent',
          'text-green-500',
          'hover:text-green-600 hover:bg-green-200',
        ],
        props.className
        )
      }
    >
      {children}
    </button>
  )
}

export default Button