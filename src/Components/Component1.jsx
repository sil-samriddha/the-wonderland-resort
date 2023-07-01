import React from 'react'
import '../Styles/c1.css'
import constants from '../Constants/constants'

export default function Component1() {
  return (
    <div className='c1'>
        <div>
          <h1>
            {constants.c1.heading}
          </h1>
          <p>
            {constants.c1.description}
            
          </p>

        </div>
        <div className='bg' style={{backgroundImage: `url(${constants.c1.image})`}}/>
        
    </div>
  )
}
