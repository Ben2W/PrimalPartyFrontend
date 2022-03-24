import React from 'react';
import { useParams } from 'react-router-dom';

// import ClippedSideBar from "../components/Sidebar/ClippedSideBar"
import HookedSideBar from "../components/Sidebar/HookedSideBar"

const Dashboard = () => {
  const { id } = useParams()

  return (
    <div className="dashboard">
      <h2>{ id }</h2>
    </div>
  );
}

// function Dashboard() {
//   return (
//     <div className="Dashboard">
//       <HookedSideBar
//         id = {1}
//         name = "Princess Peach"
//       />
//     </div>
//   );
// }

// we will replace dummy date with data from the database that is passed through to dashboard once we get api endpoints.
// Dashboard will take data from login when we route to here.

export default Dashboard;