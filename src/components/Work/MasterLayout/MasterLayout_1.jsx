import React from 'react'
import Work from '../Work'
import { Outlet } from 'react-router-dom'

export default function MasterLayout_1() {
  return (
    <div className='relative left-[20%] max-w-[80%] flex-grow px-36'>
      <Work />
      <Outlet />
    </div>
  )


}
