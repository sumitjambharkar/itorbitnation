"use client";
import config from "@/config";
import axios from "axios";
import Image from "next/image"
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
    <section class="hero-section">
  <div class="container">
    <div class="hero-content">
    <h1 class="hero-title">{blog.name}</h1>
      <Image width={100} height={650} src={blog.image} alt="hero image" class="hero-image"/>
      <div class="text-content">
      
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

