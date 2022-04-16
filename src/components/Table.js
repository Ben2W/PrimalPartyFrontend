import React, { useState, useEffect, setState,  useContext } from 'react'
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
import { UserContext } from '../context/UserContext';

export default function Table(props){
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const { user, setUser } = useContext(UserContext);

    console.log("tassks");

    console.log(props.tasks);

    useEffect(() => {
        setTasks(props.tasks)
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
    console.log("props.tasks")
    console.log(props.tasks[0])
    for (let i = 0 ; i < props.tasks.length ; i++)
    {
        tasksArr.push(
        <tr>
            <Task taskInfo={props.tasks[i]} friends={user.friends}/>
        </tr>
        )
    }

    //console.log("t array")
    //console.log(tasksArr[0])

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

        const tempTasks = temp.events[props.index].tasks;

        console.log(data.retval)

        tempTasks.push(data.retval.tasks);

        temp.events[props.index].tasks = tempTasks;

        console.log("temp")
        console.log(temp)

        setUser(temp);

        localStorage.setItem('user', JSON.stringify(temp))

        props.update()
      }



    return (
        <>
            <form onSubmit={newTaskSubmit}>
                <div style={{display:'flex'}}>
                    <TextField 
                        type="text"
                        required
                        onChange={(e) => setTitle(e.target.value)}              
                    />
                    <Button type="submit" style={{width:'40%'}} variant="outlined">New Task</Button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Assignee</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {tasksArr}
                </tbody>
            </table>
        </>
    )
}