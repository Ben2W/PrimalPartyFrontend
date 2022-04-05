import React, { useState, useEffect, Component } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import '../App.css';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import Select from 'react-select';

let users = [];
let usersToAdd = [];

const options = [
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

    useEffect(() => {
        console.log("Searching users");
        searchUsers();
    });

    let userId = "";
    let selectString = "";
    let options = [];
    for (var i=0; i < users.length; i++) {
        userId = "" + users[i]._id;
        selectString = "" + users[i].firstName + " " + users[i].lastName;
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

    const newGuestSubmit = (e) => {
        for (var i=0; i < usersToAdd.length; i++) {
            console.log(usersToAdd[i]);
            fetch(process.env.REACT_APP_URL + ('/events/'+ props._id + '/guests/' + usersToAdd[i].value) ,{
                method: 'POST',
                credentials: 'include',
            })
            .then(response => response.json())
            .then(response =>{
                console.log("RESPONSE: " + response.status);
            })
        }
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
                onMenuOpen={(e) => setSearch(e)}
                onKeyDown={(e) => {setSearch(e)}}
                onChange={(e) => users = e}
                />
            <Button variant="outlined" onClick={newGuestSubmit}>Add New Guests</Button>
        </form>
    )
}
