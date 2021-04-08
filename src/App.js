import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from "./components/login/Login";
import Home from "./components/homepage/Home"


function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route path="/home"><Home /></Route>
        </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
