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

export default function UserSearchResult(props){

    return(
        <div>
            <Typography>{props.firstName + " " + props.lastName + " (" + props.username + ")"}</Typography>
        </div>
    )
}
