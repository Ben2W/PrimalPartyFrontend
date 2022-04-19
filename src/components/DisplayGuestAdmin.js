import React, { useContext, useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { render } from '@testing-library/react';
import { UserContext } from '../context/UserContext';

export default function DisplayGuestAdmin(props){

    const { user, setUser } = useContext(UserContext);
    const guest = props.value;

    const handleGuestDelete = (e) => {

        e.preventDefault();

        fetch(process.env.REACT_APP_URL + ('/events/'+ props.eventId + '/guests/' + props._id) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        .then(() => {
            const temp = user;

            const reducedGuests = temp.events[props.index].guests;

            const Newarr = reducedGuests.filter((reducedGuests) => reducedGuests !== guest)

            temp.events[props.index].guests = Newarr;

            setUser(temp)
            localStorage.setItem('user', JSON.stringify(temp))

            props.update()
        })
    }

    return (
        <form onSubmit={handleGuestDelete}>
            <Grid container>
                <Grid item sx={1}>
                    <IconButton type="submit" aria-label="delete" style={{ color: '#ffffff' }}>
                        <HighlightOffIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={7}>
                    <Typography style={{ color: '#ffffff', marginTop: 11}}>{props.firstName + " " + props.lastName}</Typography>
                </Grid>
            </Grid>
        </form>
    )
}