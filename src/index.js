
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


ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createparty" element={<CreateParty />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/invites" element={<Invites />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
