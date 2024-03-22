import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <div className="about_box">
       <img width="100%" height={400} src="https://res.cloudinary.com/dsrc5z9na/image/upload/v1701769162/New_Project_57_sqba4z.png"/>
      </div>
      <div className="about_box">
        <div className="box_pack">
            <h1>Digital Marketing Agency</h1>
            <span>
            Our goal is to use technology to completely transform the way that businesses run. Our goal is to become our clients' preferred IT partner by providing them with scalable, dependable, and strategic solutions that enable them to accomplish their objectives.
            </span>
        </div>
        <div className="box_pack">
          <h1>Digital Marketing Institute</h1>
         <span>Our mission is to provide top-notch IT education while acting as a catalyst for both professional and personal growth. Our goal is to develop a community of students who are capable of thriving in the quickly changing tech sector.</span>
        </div>
        <div className="box_pack_action">
            <button>Call Now</button>
            <button>WhatsApp</button>
        </div>
      </div>
    </div>
  )
}

export default About