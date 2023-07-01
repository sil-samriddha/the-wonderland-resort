import React from 'react'
import '../Styles/press.css'
import press from '../Constants/Press'

export default function Press() {
  return (
    <div className='press'>
        <div className='press-content'>
        <h1>In The Press</h1>
        <div>
            {
                press.map(pr=>(
                    <div key={pr.key}>
                        <span className='quote'>&#8220;</span>
                        <div>{pr.description}</div>
                        <h2>- {pr.title}</h2>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}
