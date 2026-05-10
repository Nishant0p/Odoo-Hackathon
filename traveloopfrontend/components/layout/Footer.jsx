'use client'

import React from 'react'
import Link from 'next/link'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-copy">
        © 2024 Traveloop. All rights reserved.
      </span>
      <ul className="footer-links">
        <li><Link href="/">Privacy Policy</Link></li>
        <li><Link href="/">Terms & Conditions</Link></li>
        <li><Link href="/">Support</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
