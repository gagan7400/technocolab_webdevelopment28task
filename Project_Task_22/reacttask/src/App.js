import React, { Component } from 'react'
import Contact from './Contact.js';
import Ravenovas from './ravenovas/App.js'
import Random from './randomColor/App.js';
import Videoplayer from './videoplayer/App.js'

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        {/* <Contact /> */}
           <Ravenovas />
        {/* <Random /> */}
        {/* <Videoplayer /> */}
      </div>
    )
  }
}

