import './App.css';
import {Greet} from './components/Greet'; // importing the function made
import Welcome from './components/welcome'; // class component


function App() {
  return (
    <div className="App">
      <Greet name="Gaurav"> <p>This is prop children</p> </Greet>
      <Welcome name="Gaurav" message="Hello"></Welcome>
    </div>
  );
}

export default App;
