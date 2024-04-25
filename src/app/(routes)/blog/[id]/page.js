"use client";
import config from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";


const page = ({params}) => {
  console.log(params);

  const [blog, setBlog] = useState({})
  console.log(blog);
 

   useEffect(() => {
     getData()
   }, [])

   const getData=async()=>{
    try {
      const result = await axios.get(`${config}/api/blog/${params.id}`)
      setBlog(result.data);
    } catch (error) {
      console.log(error);
    }
   } 
   

  return (
    <section className="hero-section">
  <div className="container">
    <div className="hero-content">
    <h1 className="hero-title">{blog.name}</h1>
       <div className="img_box">
       <img  src={blog.image}  className="hero-image"/>
       </div>
      <div className="text-content">
      
        <div
          dangerouslySetInnerHTML={{
          __html:blog.content,
        }}
        ></div>
      </div>
    </div>
  </div>
</section>
  )
}


export default page

