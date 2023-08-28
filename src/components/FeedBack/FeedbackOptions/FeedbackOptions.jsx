import { ButtonFeedback, UlFeedback } from "./FeedBackOptions.style"

export const FeedbackOptions = ({options, onLeaveFeedback })=>{
return(
    
    < UlFeedback>
   < h1>Please Leave feedback</h1>
{options.map((option)=>{
        return(
            <ButtonFeedback type="button" key={option} onClick={()=>{onLeaveFeedback(option)}}>{option}</ButtonFeedback>
        )


    })}

    </ UlFeedback>

    
)
   
}