import React, { useState, useEffect, Component } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import '../App.css';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import Select from 'react-select';
import { Box } from "@mui/material";

let users = [];
let usersToAdd = [];

let options = [];


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

export default function FriendSearch(props){

    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log("Searching users");
        searchUsers();
    });

    let userId = "";
    let selectString = "";
    options = [];
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

    const newFriendSubmit = (e) => {
        for (var i=0; i < usersToAdd.length; i++) {
            console.log(usersToAdd[i]);
            fetch(process.env.REACT_APP_URL + ('/friends/'+ usersToAdd[i].value) ,{
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
            <Select 
                fullWidth
                isSearchable={true}
                isMulti
                theme = {customTheme}
                options={options} 
                placeholder="Add User"
                defaultValue=""
                onMenuOpen={(e) => setSearch(e)}
                onKeyDown={(e) => {setSearch(e)}}
                onChange={(e) => usersToAdd = e}
                />
            <Button fullWidth variant="outlined" onClick={newFriendSubmit}>Add</Button>
        </form>
    )
}
