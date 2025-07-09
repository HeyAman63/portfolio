import { CopyrightIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full relative md:w-[80%] md:left-[20%] h-30 text-sm flex flex-col justify-center items-center bg-blue-50 border-t-2 border-gray-300'>
        <p>&copy; Copyright All Rights Reserved</p>
        <p>Designed By <span className='font-semibold'>Aman Chaurasiya</span> with &hearts;</p>
    </div>
  )
}

export default Footer