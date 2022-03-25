import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import HookedSideBar from "../components/Sidebar/HookedSideBar"
import { useNavigate } from 'react-router-dom';

const local = 'http://localhost:8080/register'
const main = 'https://primalpartybackend.azurewebsites.net/account'

// import ClippedSideBar from "../components/Sidebar/ClippedSideBar"


const Dashboard = () => {

  let navigate = useNavigate();

  const handleSubmit = (e) => {


    fetch('https://primalpartybackend.azurewebsites.net/logout', {
      method: 'POST',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
  })
  .then(response => {
      console.log(response.status);
      if(!response.ok) {
          throw Error('could not log in')
      }
      return response.json();
  })
  .then(() => {
      navigate('/');
  })
  .catch(err => {
      console.log(err.message);
  })
  }
  
  fetch('http://localhost:8080/protected', {
    method: 'GET',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    credentials: 'include',
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

  return (
    <div className="dashboard">
      <form onSubmit={ handleSubmit } >
        <Button 
        type="submit"
        >
          Logout
        </Button>
      </form>



       {/* <HookedSideBar
        id = {1}
        name = "Princess Peach"
      /> */}
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