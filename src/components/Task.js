import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import '../App.css';
import AssigneeDisplay from '../components/AssigneeDisplay.js';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import Select from 'react-select';

export default function Task(props){
    let assignees = [];
    let usersToAssign = [];

    const [title, setTitle] = useState('');
    const [assigneesToAdd, setAssigneesToAdd] = useState([]);

    console.log('/events/'+ props.eventId + '/tasks/' + props.taskId);

    const handleTaskDelete = (e) => {

        e.preventDefault();

        fetch(process.env.REACT_APP_URL + ('/events/'+ props.eventId + '/tasks/' + props.taskId) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        .then(response =>{
            console.log("RESPONSE: " + response.status);
        })
        /*.then(data => {
            console.log("Data: " + data);
        })*/
      }

    const handleAddAssignee = (e) => {
        
        const details = {
            'name': title,
            'assignees': assigneesToAdd,
        }

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        for (var i=0; i < usersToAssign.length; i++) {
            console.log(usersToAssign[i]);
            fetch(process.env.REACT_APP_URL + ('/events/'+ props._id + '/tasks/' + props.taskId) ,{
                method: 'PUT',
                credentials: 'include',
            })
            .then(response => response.json())
            .then(response =>{
                console.log("RESPONSE: " + response.status);
            })
        }
    }


    for (var i=0; i<props.assignees.length; i++) {
        assignees.push(
            <AssigneeDisplay assignees={props.assignees[i].firstName}/>
        )
    }

    let userId = "";
    let selectString = "";
    let options = [];
    for (var i=0; i < props.guests.length; i++) {
        userId = "" + props.guests[i]._id;
        selectString = "" + props.guests[i].firstName + " " + props.guests[i].lastName;
        options.push({value: userId, label: selectString},)
    }

    console.log(options)

    return (
        <>
            <td>{props.task}</td>
            <td>
                {assignees}
                <Select fullWidth 
                isSearchable={true}
                isMulti
                options={options}
                placeholder="Add Assignees"
                defaultValue=""
                onChange={(e) => usersToAssign = e}
                />
                <Button fullWidth onClick={handleAddAssignee} style={{color:'#FFFFFF', background:'#000000'}}>Add</Button>
            </td>
            <td>
                <div>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </div>
                <form onSubmit={handleTaskDelete}>
                    <IconButton type="submit" aria-label="delete" style={{color:'#000000'}}>
                        <DeleteIcon />
                    </IconButton>
                </form>
            </td>
        </>
    )
}