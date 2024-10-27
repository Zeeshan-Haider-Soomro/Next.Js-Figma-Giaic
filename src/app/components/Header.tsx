import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#222222] flex items-center justify-around text-white p-5'>
        <div className='flex gap-3 items-center '>
            <img className='h-10 w-7' src="/images/logo.png" alt="" />
            <h1 className='font-bold text-4xl '>Figma</h1>
        </div>
        <div>
            <ul className='flex gap-5 '>
                <li>
                    products
                </li>
                <li>
                    solutions
                </li>
                <li>
                    pricing
                </li>
                <li>
                    resources
                </li>
            </ul>
        </div>
        <div className='flex gap-3'>
            <button className='bg-green-400 p-2 rounded'>LogIn</button>
            <button className='bg-red-600 p-2 rounded'>try writepace free</button>
        </div>
    </div>
  )
}

export default Header