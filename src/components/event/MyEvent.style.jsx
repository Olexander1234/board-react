import styled from "styled-components";
import { createGlobalStyle } from "styled-components"



export const EventsTitle = styled.li`
background-color: ${({theme})=>theme.colors.container};
border: 4px solid ${({theme})=>theme.colors.borderContainer};
border-radius: 5px;
width: 1200px;
height: 70px;
margin-top: 50px;
margin-left: 200px;
text-align: center;
`

export const EventCard = styled.li`
background-color: ${({theme})=>theme.colors.card};
border: 4px solid ${({theme})=>theme.colors.borderCaed};
width: calc((100% - 15px * 8 ) / 4);




`

export const  EventDiv = styled.div`

background-color: ${({theme})=>theme.colors.container};
border: 4px solid ${({theme})=>theme.colors.borderContainer};
border-radius: 5px;
margin-top: 50px;
display: flex;
margin: calc(4px + 50px) 0 calc(4px + 50px) 0;

`

export const EventList = styled.ul`

display: flex;
flex-wrap: wrap;
gap: 15px;


`

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: 	#F0FFF0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  ul {
  
    list-style: none;
  }
  
  a {
  
    text-decoration: none;
  }
  li{
    list-style: none;
  }
 
`

export const TypeText = styled.p`
margin-left: 300px;
margin-top: 50px;

border: 4px solid ${({type, theme})=>{

    switch (type) {
        case 'free':
 return theme.colors.green;
 case 'paid':
    return theme.colors.purple;

    case 'vip':
    return theme.colors.cold;
            
    
    
        default:
        return    theme.colors.black;
           
    }

}}

`