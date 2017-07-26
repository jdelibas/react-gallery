'use strict'

import React from 'react'
import ImageData from './../services/ImageData'
import Image from './../Components/Image'

const imageData = new ImageData()

export default class ImagesLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount () {
    imageData.getPhotosByTag('Manchester')
      .then(res => {
        this.setState({
          images: res.data.items
        })
      })
      .catch(err => {
        debugger
      })
  }

  render () {
    return (
      <div>
        {this.state.images && this.state.images.map(img => {
          return <Image src={img.media.m} />
        })}
      </div>
    )
  }
}
