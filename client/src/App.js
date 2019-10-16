import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <h1>User app</h1>

      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
