import {Component} from 'react'
import { RandomColor } from './ColorChanger.style';
export class ColorChange extends Component{

state={
    backgroundColor: 'blue'
}

randomColor = ()=>{
  const randomColor =  Math.floor(Math.random()*16777215).toString(16);
  const color = '#' + randomColor
  this.setState(
    {
        backgroundColor: color
    }
  )

  
}


render(){
    return(
        <RandomColor  onClick={this.randomColor} style={{backgroundColor: this.state.backgroundColor}}>
            Змінити колір
            </RandomColor >
    )
}

}