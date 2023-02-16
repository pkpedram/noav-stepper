import React from 'react'
import logo from './assets/images/logo.svg'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen bg-black21 w-full fixed flex flex-col items-center'>
      <div className='h-96 w-96 bg-green0C/40 rounded-full -top-40 absolute -right-40 blur-3xl animate-pulse'></div>
      <div className='h-96 w-96 bg-green0C/40 rounded-full -bottom-40 absolute -left-40 blur-3xl animate-pulse'></div>
      <img src={logo} />
      <h1 className={`text-white text-3xl font-bold my-4`}>!برای همکاری با شما آماده ایم</h1>
      <p className='text-white/50 mt-3 mb-10'>
     : برای اطلاع از هزینه حدودی و دریافت مشاوره <span className='text-green18'>رایگان</span> به سوالات زیر پاسخ دهید
      </p>
        {children}
    </div>
  )
}

export default Layout