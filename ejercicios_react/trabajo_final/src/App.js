import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import TopicRuta from './components/TopicRuta';
import TopicMTB from './components/TopicMTB';
import TopicHerramientas from './components/TopicHerramientas';
import SubTopicBiografia from './components/SubTopicBiografia';
import SubTopicHerramientas from './components/SubTopicHerramientas';
import Footer from './components/Footer';
import Home from './components/Home';
import { ROUTES } from './helpers/Constants';

import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
    <Header/>
    
    <Stack direction={{ xs: 'column', sm: 'row' }} 
        spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
        alignItems="center">

    <Route exact path={ROUTES.HOME} component={Home}/>

    <Route exact path={ROUTES.TOPIC_RUTA} component={TopicRuta}/>
    <Route exact path={`${ROUTES.TOPIC_RUTA}/:subtopic`} component={SubTopicBiografia}/>

    <Route exact path={ROUTES.TOPIC_MTB} component={TopicMTB}/>
    <Route exact path={`${ROUTES.TOPIC_MTB}/:subtopic`} component={SubTopicBiografia}/>

    <Route exact path={ROUTES.TOPIC_TOOLS} component={TopicHerramientas}/>
    <Route exact path={`${ROUTES.TOPIC_TOOLS}/:subtopic`} component={SubTopicHerramientas}/>

</Stack>

    <Footer/>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
