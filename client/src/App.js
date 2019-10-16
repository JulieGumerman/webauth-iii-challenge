import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import login from "./components/login";
import register from "./components/register";

function App() {
  return (
    <div className="App">
      <h1>User app</h1>

      <Route path="/login" component={login}/>
      <Route path="/register" component={register} />
    </div>
  );
}

export default App;
