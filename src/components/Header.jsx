import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">FreshChoice</h1>
        <nav className="nav">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} end>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
