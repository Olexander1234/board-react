import {Type} from './Type'
import PropTypes from 'prop-types';
import {FcInternal, FcManager, FcVip, FcClock} from 'react-icons/fc'
import { EventCard } from './MyEvent.style';
export const Event = ({ name, location, speaker, type, time }) => {
  const startTime = new Date(time.start);
  const endTime = new Date(time.end);
  const durationMinutes = (endTime - startTime) / (1000 * 60);

  return (
 
    <EventCard>
      <h1>{name}</h1>
      <p>
        <FcInternal /> {location}
      </p>
      <p> 
        <FcManager/>
        {speaker}</p>
     
      <p>
        <FcClock/>
        
        Duration: {durationMinutes} minutes</p>
        <Type type={type}/>

        
    </EventCard>

  );
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  
  
  