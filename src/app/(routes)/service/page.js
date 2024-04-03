import Link from "next/link";
import React from "react";

const page = () => {
  let arr = [
    {
      name: "Website Development",
      paragraph: "Professional website development services by freelance developers and website experts",
      image:
        "https://blog.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp",
      info: "fdfdf",
    },
    {
      name: "Website Development",
      p: "Professional website development services by freelance developers and website experts",
      image:
        "https://blog.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp",
      info: "fdfdf",
    },
  ];
  return (
    <section className="blog-section">
      <div className="heading_title">
        <h1>Service</h1>
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
