import { Typography } from '@mui/material'
import React from 'react';
import DisplayCardHelper from '../components/DisplayCardHelper'
import { UserContext } from '../context/UserContext';

const DisplayCard = () => {

    return (
        <div>
            <Typography sx={{ fontSize: '36px', fontWeight: 500 }}>Upcoming Events</Typography>
            <DisplayCardHelper />
        </div>
    )
}

export default DisplayCard