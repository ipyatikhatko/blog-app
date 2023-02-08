import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { authSelector, signOut } from '../../app/slices/auth'
import AuthenticatedHeader from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';
import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button';
import { useAppDispatch } from '../../app/store';



const Header = () => {
  const dispatch = useAppDispatch()
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isLoggedIn } = useSelector(authSelector);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const handleSignOut = () => {
    dispatch(signOut(null))
  }

  const handleNavigate = (to: string) => {
    navigate(to)
    if(mobileMenu) {
      setMobileMenu(false)
    }
  }

  return (
    <>
      <header className='h-[7%] bg-slate-800 shadow-lg shadow-slate-900 z-50'>
        <div className='container flex justify-between items-center m-auto max-w-5xl px-5 h-full'>
          <div className='flex items-center justify-start w-full h-full'>
            <Link to='/'>
              <h1 className='text-xl text-green-500 font-[600]'>Blogg</h1>
            </Link>
          </div>
          <div onClick={toggleMenu}>
            <FiMenu className='hidden text-green-500 mobile:block' size={30}/>
          </div>
          <div className='flex gap-2 items-center text-green-500 mobile:hidden'>
            {isLoggedIn ? <AuthenticatedHeader/> : <UnauthenticatedHeader/>}
          </div>
        </div>
        <hr className='bg-green-300 border-none h-[1px]' />
      </header>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ x: mobileMenu ? '100vw' : 0 }}
            animate={{ x: mobileMenu ? 0 : '100vw' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ x: '100vw' }}
            className='fixed z-50 top-0 left-0 h-[100vh] w-[100vw] bg-slate-700'
          >
            <div className='h-full flex flex-col p-4'>
              <div className='flex justify-end h-[10%]'>
                <FiX onClick={() => setMobileMenu(false)} className='text-green-500' size={40}/>
              </div>
              <div className='h-[90%] flex flex-col justify-between'>
                <div className='flex flex-col text-green-500 gap-8 font-bold text-3xl'>
                  <Button variant='outlined' onClick={() => handleNavigate('/')}>
                    Home
                  </Button>
                  {isLoggedIn && (
                    <>
                      <Button variant='outlined' onClick={() => handleNavigate('/create')}>
                        Create post
                      </Button>
                      <Button variant='outlined' onClick={() => handleNavigate('/bookmarks')}>
                        Bookmarks
                      </Button>
                      <Button variant='outlined' onClick={() => handleNavigate('/profile')}>
                        Profile
                      </Button>
                    </>
                  ) || (
                    <>
                      <Button variant='outlined' onClick={() => handleNavigate('/register')}>
                        Create post
                      </Button>
                      <Button variant='outlined' onClick={() => handleNavigate('/register')}>
                        Bookmarks
                      </Button>
                    </>
                  )}
                </div>
                <div className='flex flex-col justify-center items-center gap-4 font-light text-2xl'>
                  {!isLoggedIn && (
                    <>
                      <Link className='w-full' to='/login'>
                        <Button className='w-full'>
                          Sign In
                        </Button>
                      </Link>
                      <Link className='w-full' to='/login'>
                        <Button className='w-full' variant='outlined'>
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  ) || (
                    <Button onClick={handleSignOut} className='w-full' variant='outlined'>
                      Sign Out
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
