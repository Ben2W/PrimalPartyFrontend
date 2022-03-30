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

const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}

export default function Table(){

    const [contacts, setContacts] = useState([]);
    
    const tasks = [
        { 
            id: 1, 
            taskName: 'Bring Soda',
            taskAssignees: ['John Bruh', 'Cool Guy']
        }, 

        {
            id: 2, 
            taskName: 'Bring Pizza',
            taskAssignees: ['Cool Guy']
        }
    ]

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

                            <td>{value.taskName}</td>
                            <td>
                                <div>
                                    {value.taskAssignees}
                                    <Button>X</Button>
                                </div>
                                <div><Button>Add</Button></div>
                            </td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        </form>
    )
}