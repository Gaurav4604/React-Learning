import './App.css';
import Counter from './Counter';
import Message from './Message';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <Message name="Gaurav" nickName="GS"/>

      <Counter/>

      <ParentComponent/>
    </div>
  );
}

export default App;
