import React, { useContext, useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { render } from '@testing-library/react';
import { UserContext } from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function DisplayFriend(props){

    const { user, setUser } = useContext(UserContext);
    const friend = user.friends[props.index];
    const[stateOne, setStateOne]= useState(1);
    let navigate = useNavigate()


    function test() {
        handleFriendDelete();
        props.update();
    }

    const handleFriendDelete = (e) => {

        e.preventDefault();

        fetch(process.env.REACT_APP_URL + ('/friends/'+ friend._id) ,{
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

            console.log(friend)

            const Newarr = reducedFriends.filter((reducedFriends) => reducedFriends !== friend)

            temp.friends = Newarr;
            console.log('NewArr')
            console.log(Newarr)

            setUser(temp)
            localStorage.setItem('user', JSON.stringify(temp))

            props.update()
        })
    }

    return (
        <form onSubmit={handleFriendDelete} style={{display:'flex'}}>
            <Typography style={{color: '#ffffff'}}>{props.firstName + " " + props.lastName}</Typography>
            <IconButton type="submit" aria-label="delete" style={{color:'#ffffff'}}>
                <DeleteIcon />
            </IconButton>
        </form>
    )
}