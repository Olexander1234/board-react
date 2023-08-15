import { FcVip} from 'react-icons/fc'
import {TypeText} from './MyEvent.style'

export const Type = ({type})=>{
return  <TypeText type={type}>
  <FcVip/>
  {type}
  </TypeText>



   

}