import React from 'react'

type Props = {
    children: React.ReactNode
}

const BlurPage = ({children}: Props) => {
  return (
    <div className='ml-[210px] p-4 h-screen backdrop-blur-[35px] dark:shadow-2xl dark:shadow-black  mx-auto'>{children}</div>
  )
}

export default BlurPage