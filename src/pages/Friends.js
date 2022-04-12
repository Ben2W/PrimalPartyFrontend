import React, { useEffect, useState } from 'react';
import HookedSideBar from '../components/Sidebar/HookedSideBar';
import FriendSearch from '../components/FriendSearch';
import FriendList from '../components/FriendList';
import { Box } from "@mui/material";
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { UserContext } from './../context/UserContext'


function Friends(){
  
  const { user } = React.useContext(UserContext);

  /*
  const [user, setUser] = useState([])
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    fetchAccount();
    getFriends();
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
 
  const getFriends = () => 
  {
      fetch(process.env.REACT_APP_URL + '/friends' ,{
          method: 'GET',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          },
          credentials: 'include',
          })
      .then(response => response.json())
      .then(data => {
          setFriendsList(data.friends)
      })
  }
  */
 console.log(user)

  return (
    <div className="friends">
        <HookedSideBar user = {user} />
        <Grid container>
          <Grid item xs={6}>
            <FriendSearch/>
          </Grid>
          <Grid item xs={6}>
          <FriendList friendsList={user.friends}/>
          </Grid>
        </Grid>
    </div>
  );
}

export default Friends