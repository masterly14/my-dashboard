import BlurPage from '@/components/global/blurpage';
import { SideBar } from '@/components/sidebar/SideBar';
import React from 'react';

const dashboardLayout = ({children}: {children:React.ReactNode}) => {

  return (
    <>
      <SideBar />
      <main className='bg-muted/60 w-auto overflow-scroll
      '><BlurPage>{children}</BlurPage></main>
    </>
  )
}

export default dashboardLayout
