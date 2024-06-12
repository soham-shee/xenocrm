import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
    <div className='nav'>
        <ul className='flex items-center px-10'>
        <h2 className="text-2xl font-bold flex items-center py-2"><a href='/'>Xeno</a></h2>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li><a href='/info'>Info</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
    </div>
    </>
  )
}

export default Header