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

export default function Table(props){

    return (
        <>
            <Typography variant="subtitle1">
                Guest List
            </Typography>
            <ul>
            {
                props.guestList.map((value, key) => {
                return (
                    <li key={key}>
                        {value.firstName}
                    </li>
                )
                })
            }
            </ul>
        </>
    )
}