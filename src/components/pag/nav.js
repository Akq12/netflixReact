import React from 'react'

const NAv = () => {
  return (
    
      <nav className=' absolute top-0 left-0 z-2 container flex items-start justify-between p-4 pr-10 '>
    <h1 className=' text-red-700'>NETFLIX</h1>
    <ul  className=' flex items-center gap-4'>
      <li ><button className=' text-white hover:opacity-40 hover:bg-gray '>sign in</button></li>
      <li><button className='rounded-sm px-2 hover:opacity-40 hover:bg-gray bg-red-700 text-black border-black border-1'>sign up</button></li>
    </ul>
</nav>
  )
}

export default NAv