'use strict'

import axios from 'axios'

export default class ImageData {
  constructor () {
    // webpack provided global
    console.log(process.env.IMAGE_API)
    // this.url = process.env.IMAGE_API
  }

  getPhotosByTag (tag) {
    return axios.get(`${this.url}/&tags=${tag}`)
  }
}
