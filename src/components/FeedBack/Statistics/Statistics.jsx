
import { StatisticsH1, StatisticsUl } from "./Statistics.styled";
export const  Statistics = ({good, neutral, bad, total, positivePercentage})=>{
    return(
        <>
        
        <StatisticsH1>Statistics</StatisticsH1>   
<StatisticsUl>
   
    <li> <p>Good: {good}</p></li>
    <li> <p>Neutral: {neutral} </p> </li>
    <li> <p>Bad: {bad}</p></li>
    <li> <p>Total:{total}</p> </li>
    <li> <p>Positive Feedback: { positivePercentage}</p></li>
</StatisticsUl>

        </>
     
     
    )
}