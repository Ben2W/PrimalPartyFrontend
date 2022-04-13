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

import UserSearchResult from "../components/UserSearchResult.js"

let users = [];
let usersToAdd = [];

let options = [];
let usersToDisplay = [];


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
    const [newUserResults, setNewUserResults] = useState([]);


    useEffect(() => {
        console.log("Searching users: " + search);
        if(search != "")
        {
            searchUsers();
        }else
        {
            setNewUserResults([]);
        }
        
    }, [search]);

    useEffect(() => {
        console.log("Setting users: " + newUserResults);
    }, [newUserResults]);

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
            console.log("RESPONSE: ");
            console.log(data.users);
            usersToDisplay = [];
            for(let i = 0; i < data.users.length;i++)
            {
                console.log(data.users[i]._id);
                usersToDisplay.push(<UserSearchResult 
                    firstName = {data.users[i].firstName} 
                    lastName = {data.users[i].lastName}
                    username = {data.users[i].username}
                    _id = {data.users[i]._id}
                    userInfo = {data.users[i]}
                    update = {props.update}
                    />);
                
            }
            setNewUserResults(usersToDisplay);
        })
    }

    return(
        <div>
            <label style={{ color: '#ffffff' }} >Search </label>
            <input onChange = {(e) => setSearch(e.target.value)}></input>

            <Grid container>
                {newUserResults}
            </Grid>
        </div>
    )
}
