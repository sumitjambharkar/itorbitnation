
import React from "react";

const page = () => {
  let arr = [
    {
      name: "Website Development Services",
      paragraph: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372351/New_Project_24_li3yha.png",
      info: "fdfdf",
    },
    {
      name: "App Development Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372351/New_Project_25_wfkmlg.png",
      info: "fdfdf",
    },
    {
      name: "Search Engine Optimization (SEO) Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372350/New_Project_26_z7azyi.png",
      info: "fdfdf",
    },
    {
      name: "Social Media Marketing (SMM) Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372345/New_Project_27_roqlpx.png",
      info: "fdfdf",
    },
    {
      name: "Pay-Per-Click (PPC) Marketing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372343/New_Project_28_lkpz4n.png",
      info: "fdfdf",
    },
    {
      name: "Content Marketing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372344/New_Project_29_sv8nwv.png",
      info: "fdfdf",
    },
    {
      name: "Email Marketing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372343/New_Project_30_cjq6ch.png",
      info: "fdfdf",
    },
    {
      name: "Graphic Designing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372344/New_Project_31_bqudrl.png",
      info: "fdfdf",
    },
    {
      name: "Video Editing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372343/New_Project_32_tfhhsb.png",
      info: "fdfdf",
    },
  ];
  return (
    <section className="blog-section">
      <div className="heading_title">
        <h1>Our Service</h1>
      </div>
      <div className="container">
        <div className="blog-list">
          {arr.map((doc) => (
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
  );
};

export default page;
