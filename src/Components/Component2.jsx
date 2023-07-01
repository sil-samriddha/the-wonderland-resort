import React from 'react'
import '../Styles/c2.css'
import constants from '../Constants/constants'

export default function Component2({title, acc_obj}) {
  return (
    <div className='c2'>
        <h1>{title}</h1>
        <div className='acc'>
            
            {
                acc_obj.map(acc=>(
                    <div key={acc.key}>
                        <div className='c2-bg' style={{backgroundImage: `url(${acc.image})`}}/>
                        <div className='inner-acc'>
                            <div>{acc.special}</div>
                            <div>
                                <span>{acc.title}</span>
                                <p>{acc.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
