import { Typography } from '@mui/material'
import React from 'react';
import DisplayCardHelperGuest from '../components/DisplayCardHelperGuest'
import { UserContext } from '../context/UserContext';

const DisplayCardGuest = () => {
    // const { user } = React.useContext(UserContext);

    return (
        <div>
            <Typography sx={{ fontSize: '36px', fontWeight: 500 }}>Upcoming Events</Typography>
            <DisplayCardHelperGuest />
        </div>
    )
}

export default DisplayCardGuest