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
    let options = []

    console.log(props)

    const [title, setTitle] = useState('');
    const [assigneesToAdd, setAssigneesToAdd] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [assignedUsers, setAssignedUsers] = useState([])
    const [usersToAssign, setUsersToAssign] = useState(user.events[props.index].tasks[props.i].assignees);


    console.log("BRUH")
    console.log(user.events[props.index].tasks[props.i].assignees)

    //setUsersToAssign(user.events[props.index].tasks[props.i].assignees)

    console.log("usersToAssign")
    console.log(usersToAssign)

    function assigneeAdd(e){
        let temp = usersToAssign
        temp.push(e.value)
        setUsersToAssign(temp)
        handleAddAssignee()
    }

    function assigneeRemove(i)
    {
        console.log("INSIDE ASSIGNEE REMOVE")
        let temp = usersToAssign
        temp.splice(i, 1)
        setUsersToAssign(temp)
        handleAddAssignee()
    }

    async function deleteTask(eventId, taskId) {
        const response = await fetch(process.env.REACT_APP_URL + ('/events/'+ eventId + '/tasks/' + taskId) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        return response;
    }

    async function putAssignees(eventId, taskId, formBody) {
        const response = await fetch(process.env.REACT_APP_URL + ('/events/'+ eventId + '/tasks/' + taskId) ,{
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
            console.log(usersToAssign)
            tempUsersToAssign.push(usersToAssign[i]._id)
            tempUsersToAssign2.push(usersToAssign[i])
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

        if(put.status == 200)
        {
            let temp = user;

            temp.events[props.index].tasks[props.i].assignees = tempUsersToAssign2;

            setUser(temp)

            localStorage.setItem('user', JSON.stringify(temp))

            props.update()
        }
    }

    for (var i=0; i<props.taskInfo.assignees.length; i++) {
        assignees.push(
            <AssigneeDisplay assigneeInfo={props.taskInfo.assignees[i]} index={i} assigneeRemove={assigneeRemove}/>
        )
    }

    let userId = "";
    let selectString = "";

    for (let i=0; i < props.guests.length; i++) {
        let isAssignee = false
        for(let j = 0; j < user.events[props.index].tasks[props.i].assignees.length;j++)
        {
            if(props.guests[i].username == user.events[props.index].tasks[props.i].assignees[j].username)
            {
                isAssignee = true;
            }
        }

        if(!isAssignee)
        {
            userId = props.guests[i];
            selectString = "" + props.guests[i].firstName + " " + props.guests[i].lastName;
            options.push({value: userId, label: selectString},)
        }
    }

    return (
        <tr>
            <td><Typography variant='h5' sx={{ fontWeight: 'bold', color: '#000000' }}>{props.taskInfo.name}</Typography></td>
            <td>

                <Select fullWidth 
                isSearchable={false}
                options={options}
                placeholder="Add Assignees"
                defaultValue=""
                value=""
                onChange={(e) => assigneeAdd(e)}
                />
                <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#000000' }}>{assignees}</Typography>
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