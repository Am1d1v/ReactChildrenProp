import './App.css';
import Wrapper from './components/Wrapper';


function App() {



  return (
    <div className="App">
     <Wrapper color="violet">
      <h2>Inner Text</h2>
      <button>Click</button>
     </Wrapper >

     <Wrapper color="lightblue">
      <h3>Content header</h3>
      <p>Content  Text</p>
     </Wrapper >
    </div>
  );
}

export default App;
