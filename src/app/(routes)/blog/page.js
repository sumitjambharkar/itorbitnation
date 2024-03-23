import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="blog-section">
  <div className="container">
    <div className="blog-list">
      <div className="blog-item">
        <div className="blog-image">
          <img src="https://dummyimage.com/720x400" alt="blog"/>
        </div>
        <div className="blog-content">
          <h2 className="blog-category">CATEGORY</h2>
          <h1 className="blog-title">The Catalyzer</h1>
          <p className="blog-description">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="blog-actions">
            <Link href="#" className="learn-more">Learn More
              <svg className="learn-more-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="likes">1.2K</span>
            <span className="comments">6</span>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <div className="blog-image">
          <img src="https://dummyimage.com/720x400" alt="blog"/>
        </div>
        <div className="blog-content">
          <h2 className="blog-category">CATEGORY</h2>
          <h1 className="blog-title">The Catalyzer</h1>
          <p className="blog-description">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="blog-actions">
            <Link href="/blog/123" className="learn-more">Learn More
              <svg className="learn-more-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="likes">1.2K</span>
            <span className="comments">6</span>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <div className="blog-image">
          <img src="https://dummyimage.com/720x400" alt="blog"/>
        </div>
        <div className="blog-content">
          <h2 className="blog-category">CATEGORY</h2>
          <h1 className="blog-title">The Catalyzer</h1>
          <p className="blog-description">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="blog-actions">
            <Link href="#" className="learn-more">Learn More
              <svg className="learn-more-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="likes">1.2K</span>
            <span className="comments">6</span>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <div className="blog-image">
          <img src="https://dummyimage.com/720x400" alt="blog"/>
        </div>
        <div className="blog-content">
          <h2 className="blog-category">CATEGORY</h2>
          <h1 className="blog-title">The Catalyzer</h1>
          <p className="blog-description">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="blog-actions">
            <Link href="/blog/123" className="learn-more">Learn More
              <svg className="learn-more-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="likes">1.2K</span>
            <span className="comments">6</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
  )
}

export default page