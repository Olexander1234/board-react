import { EventTitle } from "./event/EventTitle";
import { EventBoar } from "./event/EventBoar";
import '../index.css';
import boars from './boar.json';
import { GlobalStyle} from './event/MyEvent.style'
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";
export const App = () => {
  return (
    <>
<GlobalStyle/>
    {/* <EventTitle title={'24th Core Worlds Coalition Conference'}/>
<EventBoar boars={boars}/> */}
{/* <Counter initialValue={5}/> */}
<Dropdown/>

    </>
   
  );
};
