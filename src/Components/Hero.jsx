import React from 'react'
import '../Styles/hero.css'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='welcome'>
            WELCOME TO
        </div>
        <div>
            <div className='hotel-name'>
                Wonderland
            </div>
            <div className='desc'>
                Resort & Spa Hotel
            </div>
        </div>
        <div>
            <button>Learn More</button>
        </div>
    </div>
  )
}
