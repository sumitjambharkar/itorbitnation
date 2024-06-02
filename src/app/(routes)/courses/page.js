import React from 'react'

const page = () => {
  let coo = [
    {
      name: "Master in Digital Marketing",
      paragraph: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_14_ct54pd.png",
      info: "₹ 40,000.",
      time:"Duration: 6 Months" 
    },
    {
      name: "Advanced Digital Marketing",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_15_zxdma6.png",
      info: "₹ 30,000.",
      time:"Duration: 4 Months" 
    },
    {
      name: "Pro in Social Meadia Ads",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_16_syh0bn.png",
      info: "₹ 10,000.",
      time:"Duration: 3 Months" 
    },
    {
      name: "Pro in Google Ads (PPC)",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_17_pmkqeg.png",
      info: "₹ 15,000.",
      time:"Duration: 3 Months" 
    },
    {
      name: "Search Engine Opti..(SEO) ",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_18_eoqukq.png",
      info: "₹ 15,000.",
      time:"Duration: 3 Months" 
    },
    {
      name: "Full Stack Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370626/New_Project_12_yafhgv.png",
      info: "₹ 70,000.",
      time:"Duration: 8 - 12 Months" 
    },
    {
      name: "Website Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370626/New_Project_13_are3ww.png",
      info: "₹ 40,000.",
      time:"Duration: 6 - 8 Months" 
    },
    {
      name: "App Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_19_hedipw.png",
      info: "₹ 50,000.",
      time:"Duration: 6 - 8 Months" 
    },
    {
      name: "Back-End Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370624/New_Project_20_sjhlfn.png",
      info: "₹ 40,000.",
      time:"Duration: 6 - 8 Months" 
    },
    {
      name: "Front-End Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_21_ifp01c.png",
      info: "₹ 20,000.",
      time:"Duration: 6 Months" 
    },
    {
      name: "Graphic Designing",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370624/New_Project_22_wuju1d.png",
      info: "₹ 15,000.",
      time:"Duration: 3 - 4 Months" 
    },
    {
      name: "Video Editing",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370624/New_Project_23_j88865.png",
      info: "₹ 30,000.",
      time:"Duration: 3 - 6 Months" 
    },
  ];
  return (
    <section className="blog-section">
    <div className="heading_title">
      <h1>Our Courses</h1>
    </div>
    <div className="container">
      <div className="blog-list">
        {coo.map((doc) => (
          <div className="blog-item">
            <div className="blog-image">
              <img
                src={doc.image}
                alt="blog"
              />
            </div>
            <div className="blog-content">
              <h1 className="blog-title">{doc.name}</h1>
              <p className="blog-description">
               {doc.info}
              </p>
              <p className="blog-description">
               {doc.time}
              </p>
              <div className="blog-actions">
                <div className="button-container">
                  <button className="primary-button">Call Now</button>
                  <button className="primary-button">WhatsApp</button>
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

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
}