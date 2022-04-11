import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import '../App.css';
import Task from './Task';

export default function Table(props){
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTasks(props.tasks);
      }, []);

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
        .then(response => response.json())
        .then(data => {
            setTasks(data.retval.tasks);
        })
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
                {
                    tasks.map((value, key) => {
                    return (
                        <tr key={key}>
                            <Task task={value.name} assignees={value.assignees} eventId={props._id} taskId={value._id}/>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        </>
    )
}