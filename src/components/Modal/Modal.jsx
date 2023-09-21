import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";




export class Modal extends Component {
    componentDidMount(){
        window.addEventListener('keydown', (e)=>{
if (e.code === 'Escape') {
    this.props.onClose()
}
        })
    }
    render() {
      return (
        <ModalBackdrop>
          <ModalContent> <h1>hi</h1>
        <p>aaaes</p>
        <button type='button' onClick={this.props.onClose}>close</button></ModalContent>
        </ModalBackdrop>
      );
    }
  }