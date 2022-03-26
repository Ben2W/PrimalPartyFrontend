import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import DisplayCardHelper from '../components/DisplayCardHelper'

const DisplayCard = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents();
      }, []);

    const fetchEvents = async() => {
    fetch('http://localhost:8080/events', {
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
            <DisplayCardHelper props = { events }/>
        </div>
    )
}

export default DisplayCard