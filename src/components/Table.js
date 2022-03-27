import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../img/purple-grad.png'; // Import using relative path
import Backdrop from '@mui/material/Backdrop';
import '../App.css';


export default function Table(props){

    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Assignee</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bring Pizza</td>
                    <td>
                        <p>John Bruh <Button>X</Button></p>
                        <p>Joe Mama <Button>X</Button></p>
                        <p><Button>Add</Button></p>
                    </td>
                </tr>

                <tr>
                    <td>Bring Water</td>
                    <td>
                        <p>John Bruh <Button>X</Button></p>
                        <p><Button>Add</Button></p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}