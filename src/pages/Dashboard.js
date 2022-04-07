import React from 'react';
import DisplayCard from '../components/DisplayCard'
import DisplayCardGuest from '../components/DisplayCardGuest'

const Dashboard = () => {
  return (
    <div>
      <div>
        <DisplayCardGuest />
      </div>
      <div>
        <DisplayCard />
      </div>
    </div>
  );
}

export default Dashboard;