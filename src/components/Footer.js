import React from 'react'
import Layouts from './Layouts'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layouts className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                <Link href="mailto:janhavia0801@gmail.com">Janhavi Agrawal <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span></Link>
            </div>  
        </Layouts>
    </footer>
  )
}

export default Footer