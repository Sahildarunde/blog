import React from 'react'
import bandw from '../assets/bandw.png'

function Logo({width = '100px'}) {
  return <div>
    <img width={40} src={bandw} alt="" />
  </div>
}

export default Logo