import React from "react";
import './Counter.css'

export class Counter extends React.Component {

constructor(){
    super()
    this.state =  {}
    this.value = 0
}









handlerDecrement = (e)=>{
console.log('збільшуємо значення')

const targetEl = e.target;


}

handlerIncrement = (e) => {
    console.log("Зменшуємо на 1")
}

render() {
    return <div className="Counter__controls">
    <span className="Counter__value">0</span>
  <button type="button" onClick={this.handlerDecrement}>
    Збільшити на 1
  </button>
  <button type="button" onClick={this.handlerIncrement}>
    Зменшити на 1
  </button>
</div>
}

}