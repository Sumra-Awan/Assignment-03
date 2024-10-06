"use client";

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '10px', 
      backgroundColor: '#282c34', 
      color: 'white' 
    }}>
      <Link href="/navbar" style={{ color: 'white', textDecoration: 'none' }}>
        Navbar
      </Link>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
        About
      </Link>
      <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
        Contact
      </Link>
      <Link href="/footer" style={{ color: 'white', textDecoration: 'none' }}>
        Footer
      </Link>
    </nav>
  );
};

export default Navbar;
