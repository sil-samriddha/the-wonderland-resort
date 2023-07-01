import React from 'react'
import '../Styles/c3.css'
import constants from '../Constants/constants'

export default function Component3() {
  return (
    <>
    <div className='c3'>
        <h1>{constants.c3.heading}</h1>
        <div className='c3-bg' style={{backgroundImage: `url(${constants.c3.promos[0].image})`}}/>
        <div>{constants.c3.description}</div>
        <div className='c3-b'>{constants.c3.promos[0].brief}</div>
    </div>
    <div className='c3-grid-2'>
        {
            constants.c3.promos.slice(1).map( promo => (
                <div key={promo.key}>
                    <div className='c3-bg' style={{backgroundImage: `url(${promo.image})`}}/>
                    <div>{promo.brief}</div>
                </div>
                )
            )
        }


    </div>
    </>
    
  )
}
