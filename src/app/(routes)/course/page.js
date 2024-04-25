import React from 'react'

const page = () => {
  let coo = [
    {
      name: "Master in Digital Marketing",
      paragraph: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_14_ct54pd.png",
      info: "fdfdf",
    },
    {
      name: "Advanced Digital Marketing",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_15_zxdma6.png",
      info: "fdfdf",
    },
    {
      name: "Pro in Social Meadia Ads",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_16_syh0bn.png",
      info: "fdfdf",
    },
    {
      name: "Pro in Google Ads (PPC)",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_17_pmkqeg.png",
      info: "fdfdf",
    },
    {
      name: "Search Engine Optimization (SEO) ",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_18_eoqukq.png",
      info: "fdfdf",
    },
    {
      name: "Full Stack Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370626/New_Project_12_yafhgv.png",
      info: "fdfdf",
    },
    {
      name: "Website Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370626/New_Project_13_are3ww.png",
      info: "fdfdf",
    },
    {
      name: "App Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_19_hedipw.png",
      info: "fdfdf",
    },
    {
      name: "Back-End Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370624/New_Project_20_sjhlfn.png",
      info: "fdfdf",
    },
    {
      name: "Front-End Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370625/New_Project_21_ifp01c.png",
      info: "fdfdf",
    },
    {
      name: "Graphic Designing",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370624/New_Project_22_wuju1d.png",
      info: "fdfdf",
    },
    {
      name: "Vedio Editing",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713370624/New_Project_23_j88865.png",
      info: "fdfdf",
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