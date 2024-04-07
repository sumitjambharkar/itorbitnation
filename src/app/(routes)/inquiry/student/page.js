import React from 'react'

const page = () => {
  return (
   <div className='rr' >

<div className='formm'>
  <form>
    <label for="fname">Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter Your Full Name.."/>

    <label for="lname">Mobile Number</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter Your Mobile Number.."/>

    <label for="lname">Location</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter Your Location.."/>

    <label for="country">Courses</label>
    <select id="country" name="country">
      <option value="australia">SEO</option>
      <option value="canada">SMM</option>
      <option value="usa">PPC</option>
    </select>
  
    <input type="submit" value="Submit"/>
  </form>
</div>
   </div>
  )
}

export default page