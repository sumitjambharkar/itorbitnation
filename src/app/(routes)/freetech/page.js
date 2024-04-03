import Link from 'next/link'
import React from 'react'

const page = () => {
  let arr = [{},{},{}]
  return (
    <section className="blog-section">
      <div className='heading_title'>
    <h1>Free Tech in 2024</h1>
    </div>
  <div className="container">
    <div className="blog-list">
      {arr.map((doc)=>(
        <div className="blog-item">
        <div className="blog-image">
          <img src="https://image.winudf.com/v2/image1/Y29tLmwya2RldmxvcGVyLmN2bWFrZXJfc2NyZWVuXzZfMTU2NzE2OTc2Nl8wNDA/screen-6.webp?fakeurl=1&type=.webp" alt="blog"/>
        </div>
        <div className="blog-content">
          <h1 className="blog-title">Free Create Resume</h1>
          <p className="blog-description">You can make and save as many resumes as you'd like in Adobe Express for free.</p>
          <div className="blog-actions">
            <div class="button-container">
         <Link href='/resume'> <button class="primary-button">Free Use</button>  </Link> 
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