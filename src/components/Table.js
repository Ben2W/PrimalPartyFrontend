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
import Task from './Task';

const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}

export default function Table(props){

    const tasks = props.tasks;
    console.log(props.tasks)
    return (
        <form>
            <Button>New Task</Button>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Assignee</th>
                    </tr>
                </thead>

                <tbody>
                {
                    tasks.map((value, key) => {
                    return (
                        <tr key={key}>
                            <Task task={value.name} assignees={value.assignees}/>
                        </tr>
                    )
                    })
                }

                    <tr>
                        <th colspan="2"><Button fullWidth style={{background:'#FFFFFF'}}>Add Task</Button></th>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}