// Code CoordinatesButton Component Here

import React,{Component} from 'react'

class CoordinatesButton extends Component{

  render(){
    return (
      <button onClick = {this.props.onReceiveCoordinates}></button>
    )
  }

}

export default CoordinatesButton
