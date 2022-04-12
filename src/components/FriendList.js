import React, { useState, useEffect, Component, setState } from 'react'
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
import DisplayFriend from './DisplayFriend';

const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}

export default function FriendList(props){
      return (
        <div>
            <InputLabel>Your Friends</InputLabel>
            <p>
            {
                props.friendsList.map((value, key) => {
                    return (
                        <div key={key}>
                            <DisplayFriend firstName = {value.firstName} lastName = {value.lastName} _id = {value._id} index = {key}/>
                        </div>
                    )
                    })
            }
            </p>
        </div>
    )
}