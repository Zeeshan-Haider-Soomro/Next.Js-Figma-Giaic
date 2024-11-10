import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#222222] flex items-center justify-around text-white p-5'>
        <div className='flex gap-3 items-center '>
            <h1 className='font-bold text-4xl '><Link href='/'>SoomroGroup</Link></h1>
        </div>
        <div>
            <ul className='flex gap-5 '>
                <li>
                    <Link href='/'>Home</Link> 
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                <Link href='/contact-us'>Contact US</Link>
                </li>
            </ul>
        </div>
        <div className='flex gap-3'>
            <button className='bg-green-400 p-2 rounded text-[20px]'>LogIn</button>
            <button className='bg-red-600 p-2 rounded text-[20px]'>SignUp</button>
        </div>
    </div>
  )
}

export default Header