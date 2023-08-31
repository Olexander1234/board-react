import { Stickers } from "./Stickers"

export const StickersList = ({stickers, onGetLabel})=>{

    return(
       
        <ul>
             {stickers.map(({img, label})=>{
         return  <li><Stickers image={img} label={label} onGetLabel={onGetLabel}/></li>

             })}
           
        </ul>
    )
}