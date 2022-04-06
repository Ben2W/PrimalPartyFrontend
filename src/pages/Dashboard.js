import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';

import HookedSideBar from '../components/Sidebar/HookedSideBar';
import DisplayCard from '../components/DisplayCard'
import DisplayCardGuest from '../components/DisplayCardGuest'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <HookedSideBar />
        <Box sx={{ marginLeft: 35, marginTop: 5 }}>
          <DisplayCardGuest />
        </Box>

        <Box sx={{ marginLeft: 35, marginTop: 5 }}>
          <DisplayCard />
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;