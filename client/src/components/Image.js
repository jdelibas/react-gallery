'use strict'

import React from 'react'

export default (props) => {
  return (
    <div>
      {props.src && <img src={props.src} width='128' height='128' />}
    </div>
  )
}
