"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";


function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='brand'>
        <Image priority height={100} width={200} src="https://res.cloudinary.com/dsrc5z9na/image/upload/v1699704544/logoIT_1_jeeklf.png"/>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} href="/">Home</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/service">Service</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/course">Course</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/location">Location</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/blog">Blog</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/about">About</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/contact">Contact</Link>
        </li>
      </div>
      <ul className='mobile-support'>
        <div onClick={toggleDrawer}>
          {drawerOpen?<div className="hamburger-menu">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>:<div className="hamburger-menu">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>}

        </div>
      </ul>
    </div>
  );
}

export default Navbar;
