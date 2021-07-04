import './App.css';
import Counter from './components/Counter';
import {Greet, Welcome} from './components/Destructuring'

import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinder from './components/Eventbinder';

import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/>
      <Greet name="Gaurav" codeName="GS"/>
      <Welcome name="Gaurav" codeName="GS"/> */}

      <EventBinder/>

      <ParentComponent/>
    </div>
  );
}

export default App;
