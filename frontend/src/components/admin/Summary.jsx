import React from 'react'
import Acceptedlist from './components/Acceptedlist'
import Headerfirst from './components/Headerfirst'

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
