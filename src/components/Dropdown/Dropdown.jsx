import './Dropdown.css'
import {Component} from 'react'
export class Dropdown extends Component {
 state = {
    visible: true
 }
 toggle= () =>{
this.setState((prevState)=>{
return{
    visible: !prevState.visible
}

})
 }

 
render(){
    return (
        <div className="Dropdown">
       
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
        Close
        </button>
        {this.state.visible && <div 
                                  className="Dropdown__menu">
                                  Випадаюче меню
                                </div>}
      </div>
    )
}


}