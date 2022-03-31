import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import DisplayCardHelperGuest from '../components/DisplayCardHelperGuest'


const DisplayCardGuest = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents();
      }, []);

    const fetchEvents = async() => {
    fetch(process.env.REACT_APP_URL + '/events', {
        method: 'GET',
        headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
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
            <DisplayCardHelperGuest props = { events }/>
        </div>
    )
}

export default DisplayCardGuest