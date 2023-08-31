export const Stickers = ({image, label,onGetLabel})=>{

    return(

        <div key={label} onClick={()=>{onGetLabel(label)}}>
            <img src={image} alt={label} />
            <p>{label}</p>
        </div>
    )
}