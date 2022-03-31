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
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const xBtnStyle = {background:'#FF0000', color: '#FFFFFF'}

export default function Table(props){
    const tasks = props.tasks;
    console.log("Props:")
    console.log(props)
    console.log("Props._id:")
    console.log(props._id)

    const [title, setTitle] = useState('');

    const newTaskSubmit = (e) => {
        e.preventDefault();

        const details = {
          'name': title,
        }
    
        var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            console.log("Form Body: " + formBody)

            fetch(process.env.REACT_APP_URL + ('/events/'+ props._id + '/tasks') ,{
              method: 'POST',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
              },
              credentials: 'include',
              body: formBody
            })
            .then(response => {
              console.log(response.status)
              if(!response.ok) {
                throw Error('could not fetch the data for that resource')
              }
              return response.json();
            })
            .catch(err => {
              console.log(err.message);
          })
      }

    return (
        <>
            <form onSubmit={newTaskSubmit()}>
                <div style={{display:'flex'}}>
                    <TextField 
                        type="text"
                        required
                        onChange={(e) => setTitle(e.target.value)}              
                    />
                    <Button type="submit" style={{width:'40%'}} variant="outlined">New Task</Button>
                </div>
            </form>

            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Assignee</th>
                            <th></th>
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
                    </tbody>
                </table>
            </form>
        </>
    )
}