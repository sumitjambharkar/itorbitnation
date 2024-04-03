"use client";
import config from '@/config'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [blogs, setblogs] = useState([])
  

  const getBlogs = async() => {
    try{
      const result = await axios.get(`${config}/api/blog`)
      setblogs(result.data);
    }catch(err){

    }
  }

  useEffect(() => {
    getBlogs()
  }, [])
  return (
    <section className="blog-section">
      <div className='heading_title'>
    <h1>Blogs</h1>
   <h3> <Link href='/add-blog'>
   <ion-icon size='large' name="add-circle-outline"></ion-icon>
   </Link></h3>
  
    </div>
  <div className="container">
    <div className="blog-list">
      {blogs.map((doc)=>(
        <div className="blog-item">
        <div className="blog-image">
          <img src={doc.image} alt="blog"/>
        </div>
        <div className="blog-content">
          <h1 className="blog-title">{doc.name.substring(0,35)}...</h1>
          <div className="blog-actions">
            <Link href={`/blog/${doc.slug}`} className="learn-more">Read More</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
    
  </div>
</section>
  )
}

export default page