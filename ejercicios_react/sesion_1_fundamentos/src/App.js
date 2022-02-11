import './App.css';
import Foco from './Components/Foco';

function App() {
  return (
    <div className="techo">
      <div className="division"><Foco tamano="grande"/></div>
      <div className="division"><Foco tamano="pequeno"/><Foco tamano="pequeno"/></div>
      <div className="division"><Foco tamano="grande"/></div>
    </div>
  );
}

export default App;
