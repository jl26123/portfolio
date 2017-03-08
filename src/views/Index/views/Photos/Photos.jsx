import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PHOTOS } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Page/components/Nav/Nav.jsx'

export default class Photos extends Component {
  render() {
    return(
      <Feed items={PHOTOS} name="Photos" renderModal={this.renderModal} />
    )
  }
}
