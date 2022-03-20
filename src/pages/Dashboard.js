import React from 'react';

// import ClippedSideBar from "../components/Sidebar/ClippedSideBar"
import HookedSideBar from "../components/Sidebar/HookedSideBar"

function Dashboard() {
  return (
    <div className="Dashboard">
      <HookedSideBar
        id = {1}
        name = "Princess Peach"
      />
    </div>
  );
}

// we will replace dummy date with data from the database that is passed through to dashboard once we get api endpoints.
// Dashboard will take data from login when we route to here.

export default Dashboard;