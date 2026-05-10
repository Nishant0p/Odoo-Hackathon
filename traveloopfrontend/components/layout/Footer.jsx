'use client'

import React from 'react'
import Link from 'next/link'


const Footer = ({ customClass = 'dash-footer' }) => {
  return (
    <footer className={customClass} style={{
      width: '100%', height: '80px', borderTop: '1px solid #EAEAEA',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', boxSizing: 'border-box', background: '#FFFFFF'
    }}>
      <span style={{ fontSize: '14px', color: '#5F5F5F' }}>
        © 2024 Traveloop. All rights reserved.
      </span>
      <ul style={{ display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link href="/" style={{ fontSize: '14px', color: '#5F5F5F', textDecoration: 'none' }}>Privacy Policy</Link></li>
        <li><Link href="/" style={{ fontSize: '14px', color: '#5F5F5F', textDecoration: 'none' }}>Terms & Conditions</Link></li>
        <li><Link href="/" style={{ fontSize: '14px', color: '#5F5F5F', textDecoration: 'none' }}>Support</Link></li>

      </ul>
    </footer>
  )
}

export default Footer
