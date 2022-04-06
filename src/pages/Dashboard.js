import React from 'react';
import DisplayCard from '../components/DisplayCard'
import DisplayCardGuest from '../components/DisplayCardGuest'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <div>
          <DisplayCardGuest />
        </div>

        <div>
          <DisplayCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;