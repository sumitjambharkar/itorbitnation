import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Digital Marketing Agency in india in This Year",
  description:
    "Best Digital Marketing Agency in india ,We provide services such as digital marketing services,search engine optimization (SEO)",
};

export default function RootLayout({ children }) {

    
  
  return (
    <html lang="en">
      <head>
        
     
      <GoogleTagManager gtmId="GTM-WK8V8NQT" />

      <link rel="icon" href="" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"/>

        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
          
      </head>
      <body className={inter.className}>
    

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
