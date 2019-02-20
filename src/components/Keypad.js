import React, { Component } from 'react';


export default class Keypad extends Component{

    logPasswordField =()=>{
        console.log('Entering password...')
    }

    render() {
        return (
              <input onKeyUp={this.logPasswordField} type="password" />
        )
      }
}