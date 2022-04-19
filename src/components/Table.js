import React, { useState, useEffect, setState,  useContext } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../img/purple-grad.png'; // Import using relative path
import Backdrop from '@mui/material/Backdrop';
import '../App.css';
import Task from './Task';
import { UserContext } from '../context/UserContext';
import { ControlCamera } from '@material-ui/icons';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

export default function Table(props){
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        //setTasks(props.tasks)
      }, []);

    async function postTask(id, formBody) {
        const response = await fetch(process.env.REACT_APP_URL + ('/events/'+ id + '/tasks') ,{
            method: 'POST',
            headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody
        })
        return response;
    }

    let tasksArr = []
    for (let i = 0 ; i < props.tasks.length ; i++)
    {
        let temp = props.tasks[i]
        
        tasksArr.push(
            <Task taskInfo={temp} guests={props.guests} key={i}/>
        )
    }

    const newTaskSubmit = async (e) => {

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

        const taskResponse = await postTask(props._id, formBody);
        
        const data = await taskResponse.json();

        const temp = user;

        temp.events[props.index].tasks = data.retval.tasks;
        
        setUser(temp);

        localStorage.setItem('user', JSON.stringify(temp))

        props.update()
      }



    return (
        <>
            <form onSubmit={newTaskSubmit}>
                <Grid container spacing={1} display='flex' justifyContent='center' alignItems='center' sx={{marginBottom: 7}}>
                    <Grid item xs={5} sx={{marginLeft: 12}}>
                            <TextField
                                style={{ backgroundColor: '#ffffff', color: '#ffffff', marginLeft: 15 }}
                                type="text"
                                label="Add New Task"
                                variant="filled"
                                size="small"
                                required
                                fullWidth
                                onChange={(e) => setTitle(e.target.value)}
                            />  
                    </Grid>
                    <Grid item sx={3}>
                            <Button 
                                sx={{ fontSize: '18px', fontWeight: 600, paddingRight: 5, paddingLeft: 5 }}
                                type="submit" 
                                variant="contained"
                                size='large'
                            >
                                New Task
                            </Button>

                    </Grid>
                </Grid>
            </form>

            <table>
                <thead>
                    <tr>
                        <th><Typography variant='h5' sx={{ fontWeight: 'bold', color: '#ffffff', backgroundColor: '#17171A' }}>Task </Typography></th>
                        <th><Typography variant='h5' sx={{ fontWeight: 'bold', color: '#ffffff', backgroundColor: '#17171A' }}>Assignee </Typography></th>
                        <th><Typography variant='h5' sx={{ fontWeight: 'bold', color: '#ffffff', backgroundColor: '#17171A' }}>Edit </Typography></th>
                    </tr>
                </thead>

                <tbody>
                    {tasksArr}
                </tbody>
            </table>
        </>
    )
}