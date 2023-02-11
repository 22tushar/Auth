
import React from 'react'
import Acceptedlist from './Acceptedlist'
import Headerfirst from './Headerfirst'

import './requests.css'

const Summary = () => {
  return (
    <div className='RequestsFront'>
      <div  className="headerforaccepted">
            <div>
                <Headerfirst/>
            </div>
            <div>
                <Acceptedlist/>
            </div>
      </div>
      
    </div>
  )
}

export default Summary
