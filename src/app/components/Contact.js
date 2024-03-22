
const Contact = () => {
  return (
   <>
    <div className='eer'>
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
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your Phone Number"/>
        </div>
        <div className="input-box message-box">
        <input type="text" placeholder="Enter your Remark"/>
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Contact
