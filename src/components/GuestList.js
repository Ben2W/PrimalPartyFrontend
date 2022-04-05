import React, { useState, useEffect, Component } from 'react'
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
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from 'react-bootstrap';
import { InputLabel } from '@mui/material';

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

      const [q, setQ] = useState([]);

      const getUsers = () => 
      {
        fetch(process.env.REACT_APP_URL + '/users' ,{
            method: 'GET',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
          })
        .then(response => response.json())
        .then(data => {
            setQ(data.q)
        })
      }

      const [selectedOption, setSelectedOption] = useState("none");
      
      const handleTypeSelect = e => {
        setSelectedOption(e.value);
      };

      const [user, setUser] = React.useState('');

      const handleChange = (event) => {
        setUser(event.target.value);
      };

      return (
        <div>
            <InputLabel>Guests</InputLabel>
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
        </div>
    )
}