import styled from 'styled-components'


export const Container = styled.div`
padding: 10px;
`
  export const  Title = styled.h1`
  line-height: 1.3;
  `
  
  export const Option = styled.button`
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  margin: 8px;
  border: none;
  background-color: ${({backgroundColor}) => backgroundColor};
  transition: transform 250ms linear;

  &:hover{
    transform: translateY(-50%)
  }
  `
  