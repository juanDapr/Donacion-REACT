import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Pages/Home'
import RH from './Components/Pages/rh'
import Requisitos from './Components/Pages/requisitos'
import About from './Components/Pages/about'
import Footer from './Components/footer'
import Login from './Components/Pages/login'
import Campana from './Components/Pages/campana'
import RegCampana from './Components/Pages/registroCampana'
import Hospital from './Components/Pages/hospital';
import registroHospital from './Components/Pages/registroHospital';
import registroIncentivo from './Components/Pages/registroIncentivo';
import incentivo from './Components/Pages/incentivo';
import menu from './Components/Pages/menu';
import registroUsuario from './Components/Pages/registroUsuario';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rh" exact component={RH}></Route>
        <Route path="/requisitos" exact component={Requisitos}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/registroUsuario" exact component={registroUsuario}></Route>
        <Route path="/campanas" exact component={Campana}></Route>
        <Route path="/registroCampana" exact component={RegCampana}></Route>
        <Route path="/hospital" exact component={Hospital}></Route>
        <Route path="/registroHospital" exact component={registroHospital}></Route>
        <Route path="/incentivos" exact component={incentivo}></Route>
        <Route path="/registroIncentivo" exact component={registroIncentivo}></Route>
        <Route path="/Menu" exact component={menu}></Route>
      </Switch>
      <Footer/>
      
    </Router>
    
  );
}

export default App;
