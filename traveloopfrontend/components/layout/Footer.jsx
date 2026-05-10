'use client'

import React from 'react'
import Link from 'next/link'


const Footer = ({ customClass = 'dash-footer' }) => {
  return (
    <footer className={customClass}>
      <span className={`${customClass}-copy`}>
        © 2024 Traveloop. All rights reserved.
      </span>
      <ul className={`${customClass}-links`}>
        <li><Link href="/">Privacy Policy</Link></li>
        <li><Link href="/">Terms & Conditions</Link></li>
        <li><Link href="/">Support</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
