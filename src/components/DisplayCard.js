import { Typography } from '@mui/material'
import React from 'react';
import DisplayCardHelper from '../components/DisplayCardHelper'
import { UserContext } from '../context/UserContext';

const DisplayCard = () => {
    const { user } = React.useContext(UserContext);

    return (
        <div>
            <Typography sx={{ fontSize: '36px', fontWeight: 500 }}>Your Events</Typography>
            <DisplayCardHelper props={user.events} />
        </div>
    )
}

export default DisplayCard