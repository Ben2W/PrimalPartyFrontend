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
import { makeStyles } from '@material-ui/core'
import { UserContext } from '../context/UserContext';

const useStyles = makeStyles(() => ({
    button: {
        margin: '4px 0',
        backgroundColor: '#17171A',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 600,
        '&:hover': {
            backgroundColor: '#fff',
            color: '#17171A'
        }
    }
}))

let users = [];
let userToAdd = '';

export default function UserSearchResult(props){

    const styles = useStyles()

    const { user, setUser } = useContext(UserContext);
    const friend = user.friends[props.index];

    const newFriendSubmit = async() => {
        fetch(process.env.REACT_APP_URL + ('/friends/'+ props._id) ,{
            method: 'POST',
            credentials: 'include',
        })
        .then(response => response.json())
        .then((data) => {
            if(data.error == ""){
                const temp = user;

                const tempFriend = user.friends;

                tempFriend.push(props.userInfo);
        
                temp.friends = tempFriend;
        
                setUser(temp);

                localStorage.setItem('user', JSON.stringify(temp))

                props.update()
            }
          })

          
      }

    return(
        <Grid container>
            <Grid item>
                <Typography style={{ color: '#ffffff' }}>{props.firstName + " " + props.lastName + " (" + props.username + ")"}</Typography>
            </Grid>
            <Grid item>
                <Button className={styles.button} onClick={newFriendSubmit}>Add</Button>
            </Grid>
        </Grid>
    )
}
