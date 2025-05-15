import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="flex justify-around bg-purple-800 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-2">Buddy</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all"><NavLink to='/'> Home</NavLink></li>
        <li className="cursor-pointer hover:font-bold transition-all"><NavLink to='/tasks'> Your Tasks</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
