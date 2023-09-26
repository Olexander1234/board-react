import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";




export class Modal extends Component {
    componentDidMount(){
        window.addEventListener('keydown', this.handelKeyDown )
              //  window.addEventListener('click', this.handleClick)
    }
    componentWillUnmount(){
      window.removeEventListener('keydown', this.handelKeyDown )
    }
    handleClick = (e)=>{
if(e.target === e.currentTarget){
  this.props.onClose()
}
    }
    handelKeyDown =(e)=>{
      console.log(e.code === 'Escape')
      if (e.code === 'Escape') {
        console.log('жмакнули на ескейп')
          this.props.onClose()
      }
              }
    render() {
      return (
        <ModalBackdrop onClick={this.handleClick}>
          <ModalContent> <h1>hi</h1>
        <p>aaaes</p>
        <button type='button' onClick={this.props.onClose}>close</button></ModalContent>
        </ModalBackdrop>
      );
    }
  }