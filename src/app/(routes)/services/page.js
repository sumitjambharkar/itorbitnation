
import React from "react";

const page = () => {
  let arr = [
    {
      name: "Website Development Services",
      paragraph: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372351/New_Project_24_li3yha.png",
      info: "Starting Cost: ₹10,000 to ₹30,000",
    },
    {
      name: "Mobile App Development Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372351/New_Project_25_wfkmlg.png",
      info: "Starting Cost: ₹50,000 to ₹1,50,000",
    },
    {
      name: "Search Engine Optimization (SEO) Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372350/New_Project_26_z7azyi.png",
      info: "Starting Cost: ₹5,000 to ₹15,000",
    },
    {
      name: "Social Media Marketing (SMM) Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372345/New_Project_27_roqlpx.png",
      info: "Starting Cost: ₹10,000 to ₹20,000",
    },
    {
      name: "Pay-Per-Click (PPC) Marketing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372343/New_Project_28_lkpz4n.png",
      info: "Starting Cost: ₹10,000 to ₹20,000",
    },
    {
      name: "Best Content Marketing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372344/New_Project_29_sv8nwv.png",
      info: "Starting Cost: ₹15,000 to ₹30,000",
    },
    {
      name: "Email Marketing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372343/New_Project_30_cjq6ch.png",
      info: "Starting Cost: ₹5,000 to ₹15,000",
    },
    {
      name: "Graphic Designing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372344/New_Project_31_bqudrl.png",
      info: "Starting Cost: ₹3,000 to ₹10,000",
    },
    {
      name: "Video Editing Services",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://res.cloudinary.com/dub7ltxoo/image/upload/v1713372343/New_Project_32_tfhhsb.png",
      info: "Starting Cost:₹500 to ₹2,000 Per Video",
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
  );
};

export default page;
