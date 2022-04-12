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
        searchUsers();
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
                usersToDisplay.push(<UserSearchResult 
                    firstName = {data.users[i].firstName} 
                    lastName = {data.users[i].lastName}
                    username = {data.users[i].username}
                    />);
            }
            setNewUserResults(usersToDisplay);
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
        <div>
            <label/>Search 
            <input onChange = {(e) => setSearch(e.target.value)}></input>

            <div>
                {newUserResults}
            </div>
            
            <Button fullWidth variant="outlined" onClick={newFriendSubmit}>Add</Button>
        </div>
    )
}
