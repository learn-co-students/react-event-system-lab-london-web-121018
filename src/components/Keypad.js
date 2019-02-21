// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  enterPasswordPrompt = () => {
    console.log('Entering password...')
  }


  render() {
    return(
      <input type="password" onKeyUp={this.enterPasswordPrompt}/>


    )
  }


}



export default Keypad;
