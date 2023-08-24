import { EventTitle } from "./event/EventTitle";
import { EventBoar } from "./event/EventBoar";
import '../index.css';
import boars from './boar.json';
import { GlobalStyle} from './event/MyEvent.style'
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";
import { ColorChange } from "./ColorChanger/ColorChanger";
import ColorPicker from './ColorPicker/ColorPicker'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <>
<GlobalStyle/>
    {/* <EventTitle title={'24th Core Worlds Coalition Conference'}/>
<EventBoar boars={boars}/> */}
{/* <Counter initialValue={5}/> */}
{/* <Dropdown/> */}
<ColorChange/>
<ColorPicker options={colorPickerOptions}/>
    </>
   
  );
};
