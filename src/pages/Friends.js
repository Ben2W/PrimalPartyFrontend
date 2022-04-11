import React, { useEffect, useState } from 'react';
import HookedSideBar from '../components/Sidebar/HookedSideBar';
import FriendSearch from '../components/FriendSearch';
import FriendList from '../components/FriendList';
import { Box } from "@mui/material";


const Friends = () => {
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

  return (
    <div className="friends">
      <HookedSideBar user = {user} />
      <Box display="flex" 
            justifyContent="center" 
            alignItems='center'
            flexDirection='column'>
        <FriendSearch/>
        <FriendList friendsList={friendsList}/>
      </Box>
    </div>
  );
}

export default Friends