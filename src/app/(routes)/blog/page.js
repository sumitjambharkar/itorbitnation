"use client";
import config from '@/config'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'

const page = () => {

  const [blogs, setblogs] = useState([])
  const [user, setUser] = useState("")
  const router =useRouter()

  useEffect(() => {
    getUserDetails()
  }, [])
  
  const getUserDetails =async ()=> {
    const result = await axios.get(`${config}/api/user`)
    setUser(result.data.data);
  }
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

  const deleteBlog = async(id)=>{
      try {
        const result =  await axios.delete(`${config}/api/blog/${id}`)
        getBlogs()
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <section className="blog-section">
      <div className='heading_title'>
    <h1>Blogs</h1>
    </div>
  <div className="container">
    <div className="blog-list">
      {blogs.map((doc)=>(
        <div key={doc._id} className="blog-item">
        <div className="blog-image">
          <img src={doc.image} alt="blog"/>
        </div>
        <div className="blog-content">
          <h1 className="blog-title">{doc.name.substring(0,35)}...</h1>
          <div className="blog-actions">
            <Link href={`/blog/${doc.slug}`} className="learn-more">Read More</Link>
            {user?.email==="ankesh@gmail.com"?<Link onClick={()=>deleteBlog(doc._id)} href="#">Delete</Link>
            :null}
            {user?.email?<Link href={`/add-blog/${doc.slug}`} >Edit</Link>:null}
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
