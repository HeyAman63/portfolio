
import React, {useState} from 'react'


const Navbar = () => {
    const [open, setopen] = useState(false);
    
  return (
    <div className={`${!open?'h-10':'h-auto'} pl-3 text-black md:hidden w-full sticky z-50`}>
      {!open ?<i
      onClick={()=>setopen(!open)}
      className="fa-solid fa-bars text-2xl mt-2"></i> : 
      <i 
      onClick={()=>setopen(!open)}
      className="fa-solid fa-xmark text-2xl mt-2"></i> }
      
      <ul className={`${open?'block':'hidden'} text-2xl mt-5 flex flex-col`}>
        <a href='#home' onClick={()=>setopen(!open)} className='px-5 hover:text-gray-600 py-3 '>Home</a>
        <a href='#about' onClick={()=>setopen(!open)} className='px-5 hover:text-gray-600 py-3 '>About</a>
        <a href='#contact' onClick={()=>setopen(!open)} className='px-5 hover:text-gray-600 py-3 '>Contact</a>
        <a href='#resume' onClick={()=>setopen(!open)} className='px-5 hover:text-gray-600 py-3 '>Resume</a>
      </ul>
    </div>
  )
}

export default Navbar