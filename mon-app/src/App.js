import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps} from './components/PureCompo';
//importer les 2 composants 

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <PureCompo />
        <PureCompoProps label={"vue js"} age={"5ans"}/> 
        
      </header>
    </div>
  );
}

export default App;
