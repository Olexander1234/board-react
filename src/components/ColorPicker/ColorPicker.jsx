    import { Component, useState } from 'react';
import {Container,  Title,   Option }from './ColorPicer.styled'


export const  ColorPicker = ({options})=>{
// state = {

//     currentOptionIdx: 0
// }

const [currentOptionIdx, setOption] = useState('')

const handleActive = (idx)=>{

    setOption(idx)
}
 
            return (
                <Container >
                    <Title >Color Picker</Title>
                    <div>
                        {options.map((option, idx) => {
                            return <Option currentIdx={currentOptionIdx} idx = {idx}   key = {option.label} 
                            
                            onClick={()=>{handleActive(idx)}}
                            backgroundColor = {option.color}>{option.label}
                            
                            </Option>
                        })}
                    </div>
                </Container>
            )   
        }
  







 
export default ColorPicker;
