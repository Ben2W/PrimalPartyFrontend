import React from 'react';
import './App.css';
import SignInOutContainer from './containers';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Switch from "react-switch";

function App() {
  return (
    <div className="App">
      <SignInOutContainer />
    </div>
  );
}

export default App;
