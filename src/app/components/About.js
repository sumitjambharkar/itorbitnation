import Link from "next/link";

const About = () => {
  
  return (
   <>
   <div className="container">
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
            <button><Link href="tel:+8097144808">Call Now </Link></button>
            <button> <Link href="https://api.whatsapp.com/send?phone=8097144808">WhatsApp</Link></button>
        </div>
      </div>
     
    </div>
   <div className="secondabout">
   <div className="about_box">
     <div className="box_pack_sp">
         <h1>Our Values</h1>
         <div>
         Our Core Values: Innovation: We welcome change and actively look for fresh approaches to problems.
         </div>
         <br></br>
         <div>Collaboration: We believe in the power of collaboration working closely with our clients and partners to achieve shared success.</div>
         <br></br>
         <div>Excellence: We consistently strive for excellence in everything we do, setting high standards for ourselves and our solutions.</div>
     </div>
     <div className="box_pack_action">
         <button><Link href='/contact'>Book Service</Link></button>

     </div>
   </div>
   <div className="about_box">
    <img width="100%" height={400} src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/04/040823_chatgpt_feat.gif?fit=1024%2C576&ssl=1"/>
   </div>
   </div>
   </div>
   </>
  )
}

export default About