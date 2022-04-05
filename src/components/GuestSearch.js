import React, { useState, useEffect, Component } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import '../App.css';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import Select from 'react-select';


const options = [
    { value: '623cf1c5dcf4fdcf55f19fd3', label: "Lebron James" },
    { value: "623be4768eed9052100532f1", label: "Dylan Piper" },
    { value: "623e7c236424b98344811a8c", label: "Jonny Haldas" },
  ];

export default function GuestSearch(props){

    /*
    const searchUsers = () => {

        const [users, setUsers] = useState;
    
        const fetchUsers = async() => {
            fetch(process.env.REACT_APP_URL + '/users?q=' + search, {
                method: 'GET',
                credentials: 'include',
            })
            .then(response => response.json())
            .then(data => {
                setUsers(data.users)
            })   
        }
    }
    */

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

    return(
        <Select fullWidth 
            isSearchable={true}
            theme = {customTheme}
            options={options} 
            placeholder="Add User"
            defaultValue=""
            />
    )
}
