import React, { useEffect, useState } from 'react';
import HookedSideBar from '../components/Sidebar/HookedSideBar';
import FriendSearch from '../components/FriendSearch';
import FriendList from '../components/FriendList';
import { Box } from "@mui/material";
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { UserContext } from './../context/UserContext'
import { Button } from '@material-ui/core';




function Friends(){
  const forceUpdate = useForceUpdate();
  const { user } = React.useContext(UserContext);

  const [value, setValue] = useState(0); // integer state

  function useForceUpdate(){
    return () => setValue(value => value + 1); // update the state to force render
  }

  return (
    <div className="friends">
        <Grid container>
          <Grid item xs={6}>
            <FriendSearch update={useForceUpdate()}/>
          </Grid>
          <Grid item xs={6}>
          <FriendList friendsList={user.friends} update={useForceUpdate()}/>
          </Grid>
        </Grid>
    </div>
  );
}

export default Friends