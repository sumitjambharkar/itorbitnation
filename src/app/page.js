import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Choose from "./components/Choose";
import About from "./components/About";
import Client from "./components/Client";

export default function Home() {
  return (
    <>
    

     <Banner/>
     <Choose/>
     <About/>
     <Client/>
     <Contact/>
 
    </>
  );
}
