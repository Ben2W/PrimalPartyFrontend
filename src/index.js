
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard.js'
import About from './pages/About.js'
import Account from './pages/Account.js'
import CreateParty from './pages/CreateParty.js'
import ForgotPassword from './pages/ForgotPassword.js'
import Friends from './pages/Friends.js'
import Invites from './pages/Invites.js'
import Verify from './pages/Verify.js'


ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createparty" element={<CreateParty />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/invites" element={<Invites />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
