import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';

export default function AssigneeDisplayGuest(props){

    return (
        <div>
            {props.assignees}
        </div>
    )
}