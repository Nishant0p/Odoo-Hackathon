'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../public/logo.png'

const Navbar = ({ customClass = 'dash-navbar' }) => {
  return (
    <nav className={customClass}>
      <div className={`${customClass.split('-')[0]}-nav-left`}>
        <Image 
          src={logoImg} 
          alt="Traveloop" 
          width={180} 
          height={44} 
          className={`${customClass.split('-')[0]}-logo-img`} 
          style={{ objectFit: 'contain', objectPosition: 'left' }}
        />
        <ul className={`${customClass.split('-')[0]}-nav-links`}>
          <li><Link href="/">Explore</Link></li>
          <li><Link href="/dashboard">Trips</Link></li>
          <li><Link href="/">Deals</Link></li>
          <li><Link href="/">About Us</Link></li>
        </ul>
      </div>
      <div className={`${customClass.split('-')[0]}-nav-right`}>
        <button className={`${customClass.split('-')[0]}-nav-icon-btn`}>
          <svg viewBox="0 0 22 22" width="22" height="22" stroke="#5F5F5F" strokeWidth="1.5" fill="none">
            <circle cx="11" cy="11" r="9"/>
            <path d="M11 2 C11 2 7 6 7 11 C7 16 11 20 11 20"/>
            <path d="M11 2 C11 2 15 6 15 11 C15 16 11 20 11 20"/>
            <line x1="2" y1="11" x2="20" y2="11"/>
          </svg>
        </button>
        <button className={`${customClass.split('-')[0]}-nav-icon-btn`}>
          <svg viewBox="0 0 22 22" width="22" height="22" stroke="#5F5F5F" strokeWidth="1.5" fill="none">
            <path d="M6 10 C6 6 8 4 11 4 C14 4 16 6 16 10 L16 14 L18 16 L4 16 L6 14 Z"/>
            <line x1="9" y1="17" x2="13" y2="17"/>
          </svg>
        </button>
        <button className={`${customClass.split('-')[0]}-profile-circle`}>
          <svg viewBox="0 0 22 22" width="22" height="22" stroke="#5F5F5F" strokeWidth="1.5" fill="none">
            <circle cx="11" cy="8" r="4"/>
            <path d="M3 20 Q3 15 11 15 Q19 15 19 20"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
