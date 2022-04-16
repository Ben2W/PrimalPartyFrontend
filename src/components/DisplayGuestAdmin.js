import React, { useState, useEffect, Component } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { render } from '@testing-library/react';

export default function DisplayGuestAdmin(props){

    const handleGuestDelete = (e) => {

        e.preventDefault();

        fetch(process.env.REACT_APP_URL + ('/events/'+ props.eventId + '/guests/' + props._id) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        .then(response =>{
            console.log("RESPONSE: " + response.status);
            
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