import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-[#155DFC] text-white p-4 rounded-xl cursor-pointer hover:bg-[#0d47a1] transition-colors duration-700 md:w-fit w-full font-[Inter]'>
      {text}
    </button>
  )
}

export default Button
