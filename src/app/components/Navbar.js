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
      <div className="brand">
        <Image
          priority
          height={100}
          width={200}
          src="https://res.cloudinary.com/dsrc5z9na/image/upload/v1699704544/logoIT_1_jeeklf.png"
        />
      </div>
      <div className={`drawer ${drawerOpen ? "open" : ""}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/service">
            Service
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/course">
            Course
          </Link>
        </li>
        <li className="dropdown">
          <Link className="dropbtn"  href="#">
            Location
          </Link>
          <div className="dropdown-content">
              <div className="card">
              <Link href="#">Andheri</Link>
              <Link href="#">Bandra</Link>
              <Link href="#">Jogeshwree</Link>
              <Link href="#">Andheri</Link>
              <Link href="#">Bandra</Link>
              <Link href="#">Jogeshwree</Link>
              <Link href="#">Andheri</Link>
              
              </div>
            </div>
        </li>
        <li className="dropdown">
          <Link className="dropbtn"  href="#">
            Free Tech
          </Link>
          <div className="dropdown-content">
              <div className="card">
              <Link onClick={toggleDrawer}  href="/resume">Free Resume</Link>
              
              </div>
            </div>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/signup">
            Sign Up
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
