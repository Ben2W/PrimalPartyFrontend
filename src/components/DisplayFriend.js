import React, { useContext, useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { render } from '@testing-library/react';
import { UserContext } from '../context/UserContext';

export default function DisplayFriend(props){

    const { user, setUser } = useContext(UserContext);
    const friend = user.friends[props.index];
    console.log(props.index)

    const handleFriendDelete = (e) => {

        e.preventDefault();

        fetch(process.env.REACT_APP_URL + ('/friends/'+ props._id) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        .then(response =>{
            console.log("RESPONSE: " + response.status);
        })
        .then(() => {
            const temp = user;
            const reducedFriends = user.friends;
            console.log('reducedFriends')
            console.log(reducedFriends)

            const Newarr = reducedFriends.filter((reducedFriends) => reducedFriends !== friend)

            temp.events = Newarr;
            console.log('NewArr')
            console.log(Newarr)

            temp.friends = Newarr
            console.log(temp)

            setUser(temp)
        })

    }

    return (
        <form onSubmit={handleFriendDelete} style={{display:'flex'}}>
            <p>{props.firstName + " " + props.lastName}</p>
            <IconButton type="submit" aria-label="delete" style={{color:'#000000'}}>
                <DeleteIcon />
            </IconButton>
        </form>
    )
}