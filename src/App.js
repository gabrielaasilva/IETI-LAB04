import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/login" component={Login}/>   
        </Switch>
    </BrowserRouter>
  );
}
