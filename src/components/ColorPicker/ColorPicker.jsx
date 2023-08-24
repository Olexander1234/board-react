    import { Component } from 'react';
import {Container,  Title,   Option }from './ColorPicer.styled'


    export class ColorPicker extends Component{
state = {

    currentOptionIdx: 0
}
        render(){
            return (
                <Container >
                    <Title >Color Picker</Title>
                    <div>
                        {this.props.options.map((option, idx) => {
                            return <Option   key = {option.label} backgroundColor = {option.color}>{option.label}</Option>
                        })}
                    </div>
                </Container>
            )   
        }
    }








 
export default ColorPicker;
