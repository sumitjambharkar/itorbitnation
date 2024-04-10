"use client"
import axios from "axios"
import { useState } from "react"
import Swal from 'sweetalert2';
import config from "@/config";

const Contact = () => {
  const [data, setData] = useState({
    name:"",
    number:"",
    message:""
  })

  const handleChange =(e) => {
   setData({...data,[e.target.name]:e.target.value})
  }

  const send =async() => {
    if (!data.name|| !data.number || !data.message) {
      Swal.fire({
        title: `Input Field Required`,
        text: "You clicked the button!",
        icon: "error"
      });
    }else{
      try {
        const result = await axios.post(`${config}/api/contact`,{
          name:data.name,
          number:data.number,
          message:data.message
        })
        Swal.fire({
          title: `Data Send Successful`,
          text: "You clicked the button!",
          icon: "success"
        });
        setData({ name: '', number: '', message: '' });
        console.log(result);
       } catch (error) {
        Swal.fire({
          title: error,
          text: "You clicked the button!",
          icon: "error"
        });
       }
    }
   
  }

  return (

    <div data-aos="fade-left" className='eer'>
    <div className="wrr">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Andheri ( W )</div>
          <div className="text-two">Mumbai-61</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">8097144808</div>
          <div className="text-two">8898688498</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">itorbitnation@gmail.com</div>
         
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text"><h2>Send Us a Message</h2></div>
        <h5>Get The Answers You Need From Us</h5>
      <div>
        <div className="input-box">
          <input name="name" value={data.name} onChange={handleChange} type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input name="number" value={data.number} onChange={handleChange} type="text" placeholder="Enter your Phone Number"/>
        </div>
        <div className="input-box message-box">
        <textarea name="message" value={data.message} onChange={handleChange} type="text" placeholder="Enter your Remark"/>
        </div>
        <div className="button">
          <input onClick={send} type="button" value="Send Now" />
        </div>
      </div>
    </div>
    </div>
  </div>
    </div>
   
  )
}

export default Contact
