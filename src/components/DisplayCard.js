import { Grid, Typography } from '@mui/material'
import React, { useContext, useState } from 'react';
import DisplayCardHelper from '../components/DisplayCardHelper'
import { UserContext } from '../context/UserContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DisplayCard = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user);
    if (user.events.length == 0) {
        return (
            <div>
                <Grid container>
                    <Grid item sx={6}>
                        <Typography variant='h5' sx={{ paddingBottom: 3, fontWeight: 'bold', color: '#ffffff' }}>Looks like there are no events...</Typography>
                        <Button
                            sx={{ fontSize: '18px', fontWeight: 600 }}
                            type='submit'
                            onClick={() => navigate('/createparty')}
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                            Create an event to get started
                        </Button>
                    </Grid>
                </Grid>

            </div>
        )
    } else {
        return (
            <div>
                <Typography variant='h3' sx={{ paddingBottom: 3, fontWeight: 'bold', color: '#ffffff' }}>Upcoming Events</Typography>
                <DisplayCardHelper />
            </div>
        )
    }
}

export default DisplayCard