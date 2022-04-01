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
    { value: 'none', label: "Empty" },
    { value: "left", label: "Open Left" },
    { value: "right", label: "Open Right" },
    {
      value: "tilt,left",
      label: "Tilf and Open Left"
    },
    {
      value: "tilt,right",
      label: "Tilf and Open Right"
    }
  ];

export default function GuestSearch(props){

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
