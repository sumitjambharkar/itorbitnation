"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import config from "@/config";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserDetails()
  }, [])
  

  const getUserDetails = async () => {
    try {
      const result = await axios.get(`${config}/api/user`);
      const userData = result.data.data;
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error gracefully, e.g., redirect to login page or display an error message
    }
  };
  

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout")
      window.location.reload()
    } catch (error) {
      log
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
        <li className="Navmenu">
          <Link onClick={toggleDrawer} href="/about">
            About Us
          </Link>
        </li>

        <li className="Navmenu">
          <Link onClick={toggleDrawer} href="/services">
            Services
          </Link>
        </li>
        <li className="Navmenu">
          <Link onClick={toggleDrawer} href="/courses">
            Courses
          </Link>
        </li>

        <li className="Navmenu">
          <Link href="/freetech">Free Tech</Link>
        </li>
        <li className="Navmenu">
          <Link onClick={toggleDrawer} href="/blog">
            Blog
          </Link>
        </li>

        <li className="Navmenu">
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
              <Link onClick={logout} href="/">Logout</Link>
            </div>
            </div>
          }
        </li>
      </div>
      <ul className="mobile-support">
        <div onClick={toggleDrawer}>
          {drawerOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
export const dynamic = 'force-dynamic';