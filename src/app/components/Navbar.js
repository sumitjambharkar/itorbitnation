"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  return (
    <div className="navbar">
      <Link href='/' className="brand">
        <Image
          priority
          height={100}
          width={200}
          src="https://res.cloudinary.com/dsrc5z9na/image/upload/v1699704544/logoIT_1_jeeklf.png"
        />
      </Link>
      <div className={`drawer ${drawerOpen ? "open" : ""}`} id="appDrawer">
      <li>
          <Link onClick={toggleDrawer} href="/about">
            About Us
          </Link>
        </li>
      
        <li>
          <Link onClick={toggleDrawer} href="/service">
            Services
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/course">
            Courses
          </Link>
        </li>
       
        <li className="dropdown">
          <Link className="dropbtn"  href="/freetech">
            Free Tech
          </Link>
        
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/blog">
            Blog
          </Link>
        </li>
     
        <li>
          <Link onClick={toggleDrawer} href="/contact">
            Contact Us
          </Link>
        </li>
        <li className='avtar'>
          <Link  onClick={toggleDrawer} href="/signup">
          <ion-icon className='avtar' size="large" name="person-circle-outline"></ion-icon>
          </Link>
        </li>
      </div>
      <ul className="mobile-support">
        <div onClick={toggleDrawer}>
          {drawerOpen ? (
            <div className="hamburger-menu">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          ) : (
            <div className="hamburger-menu">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
