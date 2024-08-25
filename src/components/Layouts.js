import React from 'react'

const Layouts = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light pl-32 pr-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
    </div>
  )
}

export default Layouts