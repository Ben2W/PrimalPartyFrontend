import { Grid, TextField, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import GuestSearch from '../components/GuestSearch';
import Table from '../components/Table';
import GuestList from '../components/GuestList';
import { UserContext } from '../context/UserContext'
import Moment from 'react-moment'

const useStyles = makeStyles(() => ({
    field: {
        margin: '5px 0 5px'
    },
    error: {
        fontSize: 14,
        color: '#FF0000',
        margin: '15px 0'
    },
    form: {
        width: '100%'
    },
    page: {
        width: '100%'
    }
}))

const AdminCard = () => {
    const styles = useStyles()
    let navigate = useNavigate()
    let { id } = useParams();
    const { user, setUser } = useContext(UserContext);
    const event = user.events[id];
    console.log(event);

    const handleDelete = () => {

        fetch(process.env.REACT_APP_URL + ('/events/' + event._id), {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(() => {
                const temp = user;
                const reducedEvents = user.events;
                console.log('reducedEvents')
                console.log(reducedEvents)

                const Newarr = reducedEvents.filter((reducedEvents) => reducedEvents !== event)

                temp.events = Newarr;
                console.log('NewArr')
                console.log(Newarr)

                temp.events = Newarr
                console.log(temp)

                setUser(temp)

                navigate('/dashboard')
            })
    }

    return (
        <div className={styles.page}>
            <Typography variant='h3' sx={{ color: '#ffffff' }}>{event.name}</Typography>
            <Grid container>
                <Grid item xs={1}>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Date: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Place: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>About: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Guests: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Tasks: </Typography>

                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>
                        <Moment format='MMMM Do YYYY, h:mm'>
                            {event.date}
                        </Moment>
                    </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.address}</Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.description}</Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.guests.length}</Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.tasks.length}</Typography>
                </Grid>
            </Grid>

        </div >
    );
}

export default AdminCard