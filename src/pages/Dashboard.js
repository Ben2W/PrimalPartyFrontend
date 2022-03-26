import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

import HookedSideBar from '../components/Sidebar/HookedSideBar';
import DisplayCard from '../components/DisplayCard'

const Dashboard = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async() => {
     fetch('http://localhost:8080/account', {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      setUser(data.user)
      //console.log(data);
      // console.log(data.user);
    })   
  }

 


  return (
    <div className="dashboard">
      <HookedSideBar user = {user} />
      <Box sx={{ marginLeft: 35, marginTop: 5}}>
        <DisplayCard />
      </Box>
    </div>
  );
}

export default Dashboard;

       {/* <form onSubmit={ handleSubmit }>
          <Button
            type="submit"
          >
            Logout
          </Button>
        </form>

        <form onSubmit={handleProtected}>
          <Button
            type="submit"
          >
            Protected
          </Button>
        </form>

        <form onSubmit={handleAccount}>
          <Button
            type="submit"
          >
            Account
          </Button>
        </form>

        <form onSubmit={handleCreate}>
          <Button
            to='/createparty'
          >
            Create Party
          </Button>
        </form> */}



// const printEvent = () => {
  //   for (var i=0; i<result.events.length; i++) {
  //     <div>
  //       result.events[i].name
  //     </div>
  //   }

  // }

  // const handleCreate = (e) => {
  //   e.preventDefault();

  //   navigate('/createparty');
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8080/logout', {
  //     method: 'POST',
  //     headers: {
  //         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  //     },
  //     credentials: 'include'
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     navigate('/');
  //   })
  // }

  //This is a how to see if the user is logged in
  //
  // const handleProtected = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8080/protected', {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  //     },
  //     credentials: 'include',
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  // }

  //This is working example of a GET request
  //
  //
  // const handleAccount = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8080/events', {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  //     },
  //     credentials: 'include',
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setResult(data)
  //     // navigate('/account');
  //   })    
  // }