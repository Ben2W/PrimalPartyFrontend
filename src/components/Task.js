import React, { useState, useEffect, setState,  useContext } from 'react'
import { Button, Typography } from '@mui/material'
import '../App.css';
import AssigneeDisplay from '../components/AssigneeDisplay.js';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import Select from 'react-select';
import { UserContext } from '../context/UserContext';
import { PriceChange } from '@mui/icons-material';

export default function Task(props){

    let assignees = [];
    let usersToAssign = [];
    let options = []

    const [title, setTitle] = useState('');
    const [assigneesToAdd, setAssigneesToAdd] = useState([]);
    const { user, setUser } = useContext(UserContext);

    console.log(props)
    console.log(user)

    async function deleteTask(eventId, taskId) {
        const response = await fetch(process.env.REACT_APP_URL + ('/events/'+ eventId + '/tasks/' + taskId) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        return response;
    }

    async function putAssignees(eventId, taskId, formBody) {
        const response = fetch(process.env.REACT_APP_URL + ('/events/'+ eventId + '/tasks/' + taskId) ,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                'Accept': 'application/json'
            },
            credentials: 'include',
            body: formBody
        })
        return response;
    }

    const handleTaskDelete = async (e) => {

        e.preventDefault();

        const taskResponse = await deleteTask(props.taskInfo.event, props.taskInfo._id);

        const data = await taskResponse.json();

        const temp = user;

        temp.events[props.index].tasks.splice(props.i, 1)

        for(let i = 0; i < data.tasks.length; i++)
        {
            temp.events[props.index].tasks[i]._id = data.tasks[i]
        }
        
        setUser(temp);

        localStorage.setItem('user', JSON.stringify(temp))

        props.update()
      }

    const handleAddAssignee = async (e) => {
        
        let tempUsersToAssign = []
        let tempUsersToAssign2 = []

        for (let i = 0; i < usersToAssign.length;i++)
        {
            tempUsersToAssign.push(usersToAssign[i].value._id)
            tempUsersToAssign2.push(usersToAssign[i].value)
        }

        const details = {
            name : props.taskInfo.name,
            description : "none",
            done : false,
            assignees: tempUsersToAssign,
        }

        var formBody = [];

        for (let property in details) {
            if(property == 'assignees')
            {
            for (let i = 0; i < details.assignees.length; i++){
                //console.log(details.assignees.length)
                let encodedKey = encodeURIComponent(`assignees[${i}]`);
                let encodedValue = encodeURIComponent(details.assignees[i]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
                break;
            }
            else
            {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
        }

        formBody = formBody.join("&");

        const put = await putAssignees(props.taskInfo.event, props.taskInfo._id, formBody)

        const data = await put.json();

        //console.log(data)

        if(put.status == 200)
        {
            const temp = user;

            temp.events[props.index].tasks[props.i].assignees = tempUsersToAssign2;

            props.update()
        }

        /*
        fetch(process.env.REACT_APP_URL + ('/events/'+ props.taskInfo.event + '/tasks/' + props.taskInfo._id) ,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody
        })
        .then(response =>{
            console.log("response");
            console.log(response.json());
        })
        */
    }

    console.log(props)

    for (var i=0; i<props.taskInfo.assignees.length; i++) {
        assignees.push(
            <AssigneeDisplay assigneeInfo={props.taskInfo.assignees[i]}/>
        )
    }

    let userId = "";
    let selectString = "";
    for (var i=0; i < props.guests.length; i++) {
        console.log(props.guests[i]);
        userId = props.guests[i];
        selectString = "" + props.guests[i].firstName + " " + props.guests[i].lastName;
        options.push({value: userId, label: selectString},)
    }

    return (
        <tr>
            <td><Typography variant='h5' sx={{ fontWeight: 'bold', color: '#000000' }}>{props.taskInfo.name}</Typography></td>
            <td>
                <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#000000' }}>{assignees}</Typography>
                <Select fullWidth 
                isSearchable={false}
                options={options}
                placeholder="Add Assignees"
                defaultValue=""
                onChange={(e) => usersToAssign = e}
                />
                {/* <Button fullWidth 
                        variant="contained" 
                        onClick={handleAddAssignee}
                        sx={{ fontSize: '18px', fontWeight: 600, paddingRight: 5, paddingLeft: 5 }}
                >Add</Button> */}
            </td>
            <td>
                <form onSubmit={handleTaskDelete}>
                    <IconButton type="submit" aria-label="delete" style={{color:'#000000'}}>
                        <DeleteIcon />
                    </IconButton>
                </form>
            </td>
        </tr>
    )
}