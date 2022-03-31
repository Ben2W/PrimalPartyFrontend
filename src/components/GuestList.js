import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../img/purple-grad.png'; // Import using relative path
import Backdrop from '@mui/material/Backdrop';
import '../App.css';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}

export default function GuestList(props){

    const [guestId, setGuestId] = useState();
    console.log("props:");
    console.log(props);
    const newGuestSubmit = (e) => {

        fetch(process.env.REACT_APP_URL + ('/events/'+ props._id + '/guests/' + guestId) ,{
            method: 'POST',
            headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(response =>{
            console.log("RESPONSE: " + response.status);
        })
      }

    return (
        <>
            <form onSubmit={newGuestSubmit}>
                <div style={{display:'flex'}}>
                    <Typography variant="subtitle1">
                        Guest List
                    </Typography>

                    <TextField 
                        type="text"
                        required
                        onChange={(e) => setGuestId(e.target.value)}              
                    />
                    <Button type="submit" style={{width:'40%'}} variant="outlined">New Task</Button>
                </div>
            </form>

            <ul>
            {
                props.guests.map((value, key) => {
                return (
                    <li key={key}>
                        {value.firstName + " " + value.lastName}
                    </li>
                )
                })
            }
            </ul>
        </>
    )
}