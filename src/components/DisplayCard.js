import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import DisplayCardHelper from '../components/DisplayCardHelper'


const DisplayCard = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents();
      }, []);

    const fetchEvents = async() => {
    fetch(process.env.REACT_APP_URL + '/events', {
        method: 'GET',
        credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
        setEvents(data.events)
    })   
    }

    return (
        <div>
            <Typography sx={{ fontSize: '36px', fontWeight: 500}}>Upcoming Events</Typography>
            <DisplayCardHelper props = { events }/>
        </div>
    )
}

export default DisplayCard