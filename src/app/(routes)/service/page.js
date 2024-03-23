import Link from 'next/link'
import React from 'react'

const page = () => {
  let arr = [1,2,3,4,5,6,7,8]
  return (
    <section className="blog-section">
      <div className='heading_title'>
    <h1>Service</h1>
    </div>
  <div className="container">
    <div className="blog-list">
      {arr.map((doc)=>(
        <div className="blog-item">
        <div className="blog-image">
          <img src="https://res.cloudinary.com/dsrc5z9na/image/upload/v1701769162/New_Project_57_sqba4z.png" alt="blog"/>
        </div>
        <div className="blog-content">
          <h1 className="blog-title">The Catalyzer</h1>
          <p className="blog-description">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="blog-actions">
            <div class="button-container">
          <button class="primary-button">Call Now</button>
          <button class="primary-button">WhatsApp</button>
          
        </div>
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