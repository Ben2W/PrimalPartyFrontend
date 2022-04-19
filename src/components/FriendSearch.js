import React, { useContext, useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import '../App.css';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import Select from 'react-select';
import { Box } from "@mui/material";
import { UserContext } from '../context/UserContext';
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

    const [value, setValue] = useState(0); // integer state

    const [search, setSearch] = useState('');
    const [newUserResults, setNewUserResults] = useState([]);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if(search != "")
        {
            searchUsers();
        }else
        {
            setNewUserResults([]);
        }
    }, [search]);

    function forceSearchUpdate(){
        searchUsers()
        //return () => setValue(value => value + 1); // update the state to force render
    }

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
            usersToDisplay = [];
            for(let i = 0; i < data.users.length;i++)
            {
                let alreadyFriend = false
                for(let j = 0; j < user.friends.length; j++)
                {
                    if(data.users[i].username == user.friends[j].username)
                    {
                        alreadyFriend = true
                    }
                }

                if(alreadyFriend == false)                
                {
                    usersToDisplay.push(<UserSearchResult 
                        firstName = {data.users[i].firstName} 
                        lastName = {data.users[i].lastName}
                        username = {data.users[i].username}
                        _id = {data.users[i]._id}
                        userInfo = {data.users[i]}
                        update = {props.update}
                        />);
                }                
            }
            setNewUserResults(usersToDisplay);
            props.update()
        })
    }

    return(
        <div>
            <label style={{ color: '#ffffff' }} >Search </label>
            <input 
                onChange = {(e) => setSearch(e.target.value)}>
            </input>
            <Grid container>
                {newUserResults}
            </Grid>
        </div>
    )
}
