"use client"

import config from "@/config"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {
  
  const [resume, setResume] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])
  
  const getData =async()=>{
    try {
      const result = await axios.get(`${config}/api/resume`)
      setResume(result.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <div className="loading"><h1>Loading.......</h1></div>
  }


  return (
    <>
    <section className="pricing-section">
  <div className="container">
    <div className="section-header">
      <h1 className="section-title">Free Download & Create Resume</h1>
      <p className="section-description">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
    </div>
    <div className="cards-container">
      {resume.map((doc)=>(
        <div className="pricing-card">
        <div className="card-content">
          <img src={doc.image}/>
          <div className='card_center'>
          <Link href={`/resume/${doc._id}`}  className="card-button">Get This Resume For FREE</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}

export default page
