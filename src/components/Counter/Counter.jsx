import React from "react";
import './Counter.css'
import { Buttons } from "./Buttons";
import {CounterValue} from './CaunterValue'
export class Counter extends React.Component {

// static propType ={
// //  initialValue : 0;

// // }


static defaultProps = {
  initiallValue: 0
}
state = {
value: this.props.initiallValue
}







handlerDecrement = (e)=>{
  this.setState((prevState)=>{
    return {
      value: prevState.value + 1
    }
  })

const targetEl = e.target;


}

handlerIncrement = (e) => {

   
    this.setState((prevState)=>{
      return {
        value: prevState.value - 1
      }
    })
}

render() {
  const {handlerDecrement, handlerIncrement} = this
    return <div className="Counter__controls">
   <CounterValue value={this.state.value}/>
  <Buttons onDecrement={handlerDecrement}
  onIncrement ={handlerIncrement}/>
</div>
}

}