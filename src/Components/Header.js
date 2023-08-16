import React from 'react'

export default function Header() {
  return (
    <div className='fixed flex items-center justify-between p-4 z-[100] w-full text-white font-semibold'>
        <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>Movies</h1>
        <div>
            <button className='pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}
