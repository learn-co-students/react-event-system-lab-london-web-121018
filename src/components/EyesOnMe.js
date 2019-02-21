// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  logGood = () => {
    console.log('Good!')
  }

  logEyesOnMe = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.logGood} onBlur={this.logEyesOnMe}></button>
    )
  }

}

export default EyesOnMe;
