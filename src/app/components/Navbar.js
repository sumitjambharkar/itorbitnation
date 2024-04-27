"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState("")
  const router =useRouter()

  useEffect(() => {
    getUserDetails()
  }, [])
  

  const getUserDetails =async ()=> {
    const result = await axios.get("/api/user")
    setUser(result.data.data);
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const logout = async() => {
    try {
      await axios.get("/api/logout")
      router.push('/')
      window.location.reload()
    } catch (error) {
      
    }
  }


  return (
    <div className="navbar">
      <Link href="/" className="brand">
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
          <Link onClick={toggleDrawer} href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/courses">
            Courses
          </Link>
        </li>

        <li>
          <Link href="/freetech">Free Tech</Link>
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
        <li>
          {!user? <Link  onClick={toggleDrawer} href="/signup">
          SignUp
          </Link>:
          <div className="dropdown">
            <button className="dropbtn">
            <div className="user">
            {user.email.substring(0,1)}
          </div>
            </button>
            <div className="dropdown-content">
              <Link href="/add-blog">Add Blog</Link>
              <Link onClick={logout} href="#">Logout</Link>
            </div>
          </div>}
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
