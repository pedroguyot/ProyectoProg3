import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//IMPORTS DE SCREENS
import Home from './screens/Home/Home';
import AboutUs from './screens/AboutUs/AboutUs';
import Detalle from './screens/Detalle/Detalle';
import Favoritos from './screens/Favoritos/Favoritos';
import Populares from './screens/Populares/Populares';
import Cartelera from './screens/Cartelera/Cartelera';
import NotFound from './screens/NotFound/NotFound';

//IMPORTS DE COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      < Header />

      <Switch>
        <Route path={'/'} exact={true} component={Home}></Route>
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path={'/populares'} component={Populares} />
        <Route path={'/cartelera'} component={Cartelera} />
        <h1>Probando git</h1>

        <Route component={NotFound} /> {/* TIENE QUE ESTAR SIEMPRE AL FINAL ESTA RUTA */}
      </Switch>

      < Footer />

    </div>

  );
}

export default App;
