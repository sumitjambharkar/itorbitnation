import Link from 'next/link'
import React from 'react'

const page = () => {
    
  return (
    <div className='pp'>
        <Link href='/inquiry/student' className='as'>
        <h3>Are You Student</h3>
        </Link>
        <Link href='/inquiry/services' className='as'>
        <h3>Are You Business Man</h3>
        </Link>
    </div>
  )
}

export default page