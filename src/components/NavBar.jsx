import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='flex justify-center'>
            <ul className='flex gap-3'>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'active text-blue-500 ' : ''}>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active text-blue-500 ' : ''}>About</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active text-blue-500 ' : ''}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar