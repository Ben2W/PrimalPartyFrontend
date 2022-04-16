import React, { useContext, useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
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

            console.log("guest")
            console.log(props.value)

            setUser(temp)
            localStorage.setItem('user', JSON.stringify(temp))

            props.update()
        })
    }

    return (
        <form onSubmit={handleGuestDelete} style={{display:'flex'}}>
            <Typography sx={{ color: '#ffffff'}}>{props.firstName + " " + props.lastName}</Typography>
            <IconButton sx={{ color: '#ffffff'}} type="submit" aria-label="delete" style={{color:'#000000'}}>
                <DeleteIcon />
            </IconButton>
        </form>
    )
}