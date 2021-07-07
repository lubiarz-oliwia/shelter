import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage';
import Login from './components/Login';
import Register from './components/Register';
import AddPetForm from './components/AddPetForm';
import AnimalPage from './components/AnimalPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/zwierze" component={AnimalPage} />
        <Route path="/dodajzwierze" component={AddPetForm} />
      </Switch>
    </Router>
  );
}

export default App;
