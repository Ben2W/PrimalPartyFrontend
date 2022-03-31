import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../img/purple-grad.png'; // Import using relative path
import Backdrop from '@mui/material/Backdrop';
import '../App.css';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import AssigneeDisplayGuest from '../components/AssigneeDisplayGuest';
import { TaskAltOutlined } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';

export default function TaskGuest(props){
    let assignees = [];

    for (var i=0; i<props.assignees.length; i++) {
        assignees.push(
            <AssigneeDisplayGuest assignees={props.assignees[i].firstName + " " + props.assignees[i].lastName}/>
        )
    }

    console.log(props.task)

    return (
        <>
            <td>{props.task}</td>
            <td>
                {assignees}
            </td>
        </>
    )
}