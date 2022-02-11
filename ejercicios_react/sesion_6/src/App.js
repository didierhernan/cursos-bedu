import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import PlanReact from './components/PlanReact';
import PlanRedux from './components/PlanRedux';
import SubtemaHook from './components/SubtemaHook';
import SubtemaViejo from './components/SubtemaViejo'
import {RUTAS} from './helpers/constants'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path={RUTAS.planReact} component={PlanReact}/>
      <Route exact path={`${RUTAS.planReact}/:subtema`} component={SubtemaHook}/>
      <Route exact path={RUTAS.planRedux} component={PlanRedux}/>
      <Route exact path={`${RUTAS.planRedux}/:subtema`} component={SubtemaViejo}/>
    </BrowserRouter>
  );
}

export default App;
