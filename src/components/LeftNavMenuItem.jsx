import React, { useContext } from 'react'
import { Context } from '../context/contextApi'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return (
    <div  className={"text-white text-sm cursor-pointer h-9 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.25] "+className} onClick={action}>
      <span className='text-xl mr-3'>{icon}</span>{text}
    </div>
  )
}

export default LeftNavMenuItem