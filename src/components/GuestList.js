import React, { useContext, useEffect, useState } from 'react'
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
import DisplayGuestAdmin from './DisplayGuestAdmin';
import { UserContext } from '../context/UserContext';


const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}



export default function GuestList(props){

    const [guestId, setGuestId] = useState();
    const [q, setQ] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState("none");
 
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
      return (
        <div>
            <p>
            {
                user.events[props.index].guests.map((value, key) => {
                    return (
                        <div key={key}>
                            <DisplayGuestAdmin 
                                firstName = {value.firstName} 
                                lastName = {value.lastName} 
                                _id = {value._id} 
                                eventId = {props._id} 
                                update={props.update} 
                                index={props.index}
                                value={value}
                                />
                        </div>
                    )
                    })                    
            }
            </p>
        </div>
    )
}