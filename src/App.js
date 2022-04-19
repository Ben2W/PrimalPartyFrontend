import React, { useState } from 'react';
import './App.css';

import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import CreateParty from './pages/CreateParty';
import Friends from './pages/Friends';
import Main from './pages/Main';
import ResetPassword from './pages/ResetPassword'
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import EditAccount from './pages/EditAccount';
import AdminCard from './pages/AdminCard';
import GuestCard from './pages/GuestCard'
import EditEvent from './pages/EditEvent';
import { Routes, Route } from 'react-router-dom'
import { UserContext } from './context/UserContext';



function App() {
  const [user, setUser] = useState();

  if (!user) {
    const localUser = localStorage.getItem('user')
    if (localUser) {
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
            <Route path="/editaccount" element={<EditAccount />} />
            <Route path="/eventadmin/:id" element={<AdminCard />} />
            <Route path="/event/:id" element={<GuestCard />} />
            <Route path="/editevent/:id" element={<EditEvent />} />
          </Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;