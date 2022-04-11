import React, { useState } from 'react';
import './App.css';

import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import CreateParty from './pages/CreateParty';
import Friends from './pages/Friends';
import Invites from './pages/Invites';
import Main from './pages/Main';
import ResetPassword from './pages/ResetPassword'
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import EditAccount from './pages/EditAccount';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';


function App() {
  const [user, setUser] = useState(null);

  if(!user) {
    const localUser = localStorage.getItem('user')
    if(localUser) {
      setUser(JSON.parse(localUser))
    }
  }
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        {/* public routes */}
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verify" element={<Verify />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/createparty" element={<CreateParty />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/invites" element={<Invites />} />
            <Route path="/editaccount" element={<EditAccount />} />

          </Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;