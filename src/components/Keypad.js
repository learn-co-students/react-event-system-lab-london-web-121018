// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  hadnleKeyUp = () => {
    console.log('Entering password...')
  }
  render () {
    return <input type='password' onKeyUp={this.hadnleKeyUp} />
  }
}

export default Keypad
