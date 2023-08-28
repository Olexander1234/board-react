    import { Component } from 'react';
import {Container,  Title,   Option }from './ColorPicer.styled'


    export class ColorPicker extends Component{
state = {

    currentOptionIdx: 0
}



handleActive = (idx)=>{

    this.setState({
        currentOptionIdx: idx,

    })
}
        render(){
            return (
                <Container >
                    <Title >Color Picker</Title>
                    <div>
                        {this.props.options.map((option, idx) => {
                            return <Option currentIdx={this.state.currentOptionIdx} idx = {idx}   key = {option.label} 
                            
                            onClick={()=>{this.handleActive(idx)}}
                            backgroundColor = {option.color}>{option.label}
                            
                            </Option>
                        })}
                    </div>
                </Container>
            )   
        }
    }








 
export default ColorPicker;
