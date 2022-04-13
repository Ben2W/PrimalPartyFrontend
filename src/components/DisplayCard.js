import { Typography } from '@mui/material'
import React from 'react';
import DisplayCardHelper from '../components/DisplayCardHelper'
import { UserContext } from '../context/UserContext';

const DisplayCard = () => {

    return (
        <div>
            <Typography variant='h3' sx={{paddingBottom: 3, fontWeight: 'bold', color: '#ffffff'}}>Upcoming Events</Typography>
            <DisplayCardHelper />
        </div>
    )
}

export default DisplayCard