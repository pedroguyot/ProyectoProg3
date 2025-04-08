import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import AboutUs from './screens/AboutUs/AboutUs';
import Detalle from './screens/Detalle/Detalle';
import NotFound from './screens/NotFound/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      < Header />

      <Switch>
        <Route path={'/'} exact={true} component={Home}></Route>
        AGREGAR LAS DEMAS
      </Switch>

      < Footer />

    </div>

  );
}

export default App;
