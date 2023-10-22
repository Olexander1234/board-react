import { useContext } from "react"
import {Color} from './App'
export const Button = ()=>{
  const bgColor = useContext(Color)
    return(
        <button type="submit" style={{backgroundColor: bgColor}}>useComponent</button>
    )
}