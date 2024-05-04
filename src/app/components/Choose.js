import React from 'react';  
import Link from "next/link";

const Choose = () => {
 
  return (
    <div className='choose_field'>
        <h1>Choose Field</h1>
        <div className='choose_center'>
            <div className='left_side'>
               <span className="larage">Digital Marketing Agency</span><br />
               <span className='meduim'>Best Benefits of Low-Cost Digital Marketing Agencies</span><br />
               <span className='small'>Maximizing ROI on a Tight Budget</span><br />
               <Link  href="/services"><button className='chosebtn'>Check</button></Link>
            </div>
            <div className='left_side'>
               <span className="larage">Digital Marketing Institute</span><br />
               <span className='meduim'>Low Cost Digital Marketing Institute for Success</span><br />
               <span className='small'>Low-Cost Institute Solutions</span><br />
               <Link href="/courses"><button className='chosebtn'>Check</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Choose