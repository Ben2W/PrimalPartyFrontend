import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';

import HookedSideBar from '../components/Sidebar/HookedSideBar';
import DisplayCard from '../components/DisplayCard'
import DisplayCardGuest from '../components/DisplayCardGuest'

const Dashboard = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async() => {
     fetch(process.env.REACT_APP_URL + '/account', {
      method: 'GET',
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      setUser(data.user)
    })   
  }

  return (
    <div className="dashboard">
      <HookedSideBar user = {user} />
      <Box sx={{ marginLeft: 35, marginTop: 5 }}>
        <DisplayCardGuest />
      </Box>

      <Box sx={{ marginLeft: 35, marginTop: 5 }}>
        <DisplayCard />
      </Box>
    </div>
  );
}

export default Dashboard;