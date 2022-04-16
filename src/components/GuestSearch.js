import React, { useContext, useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import '../App.css';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import Select from 'react-select';
import { UserContext } from '../context/UserContext';
import { convertLength } from '@mui/material/styles/cssUtils';

let users = [];

let options = [
    { value: '623cf1c5dcf4fdcf55f19fd3', label: "Lebron James" },
    { value: "623be4768eed9052100532f1", label: "Dylan Piper" },
    { value: "623e7c236424b98344811a8c", label: "Jonny Haldas" },
  ];


function changeSearch(e)
{
    console.log("bruh");
    this.setSearch(e.target.value);
}

function customTheme(theme)
{
    return {
        ... theme,
        colors:
        {
            ...theme.colors,
            primary25: 'orange',
            primary:'green',
        }
    }
}

export default function GuestSearch(props){

    const [search, setSearch] = useState('');
    const { user, setUser } = useContext(UserContext);
    const [usersToAdd, setUsersToAdd] = useState();

    useEffect(() => {
        //console.log("Users to add:");
        console.log(usersToAdd);
    });

    let userId = "";
    let selectString = "";
    options = [];
    for (var i=0; i < user.friends.length; i++) {
        userId = "" + user.friends[i]._id;
        selectString = "" + user.friends[i].firstName + " " + user.friends[i].lastName;
        options.push({value: userId, label: selectString},)
    }

    const searchUsers = async() => {
        fetch(process.env.REACT_APP_URL + '/users?q=' + search, {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            users = data.users
        })
    }

    async function postGuests(id, val) {
        const response = await fetch(process.env.REACT_APP_URL + ('/events/'+ id + '/guests/' + val), {
            method: 'POST',

            credentials: 'include'
        })
        return response;
    }

    const newGuestSubmit = async (e) => {

        console.log("PREPARING TO SEND:")
        console.log(usersToAdd)
        
        for (let i=0; i < usersToAdd.length; i++) {

            console.log("TO: " + '/events/'+ props._id + '/guests/' + usersToAdd[i].value)
            
            const guestResponse = await postGuests(props._id, usersToAdd[i].value)

            if(guestResponse.status == 200)
            {
                const data = await guestResponse.json();
                
                const temp = user;

                const tempGuests = temp.events[props.index].guests;

                tempGuests.push(data.newGuest);
        
                temp.events[props.index].guests = tempGuests;

                setUser(temp);

                localStorage.setItem('user', JSON.stringify(temp))
            }
        }
        props.update()
      }

    return(
        <form>
            <Select fullWidth 
                isSearchable={true}
                isMulti
                theme = {customTheme}
                options={options} 
                placeholder="Add User"
                defaultValue=""
                onChange={(e) => setUsersToAdd(e)}
                />
            <Button variant="outlined" onClick={newGuestSubmit}>Add New Guests</Button>
        </form>
    )
}
