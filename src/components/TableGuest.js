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
import TaskGuest from './TaskGuest';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}

export default function TableGuest(props){

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Assignee</th>
                    </tr>
                </thead>

                <tbody>
                {
                    props.tasks.map((value, key) => {
                    return (
                        <tr key={key}>
                            <TaskGuest task={value.name} assignees={value.assignees}/>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        </>
    )
}