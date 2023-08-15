import { Event } from "./Event"; 

import {EventDiv, EventList} from './MyEvent.style'
export const EventBoar = ({boars}) => {
  return (
    <EventDiv>
<EventList>


        {boars.map(({ name, location, speaker, type, time }) => (
       
<Event 
            key={name} 
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            time={time}
          />
        
          

            
        
        ))}
</EventList>

    </EventDiv>
  );
};