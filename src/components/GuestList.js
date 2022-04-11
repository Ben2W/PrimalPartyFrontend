import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import '../App.css';

export default function GuestList(props){

    const [guestId, setGuestId] = useState();
    console.log("props:");
    console.log(props);
    const newGuestSubmit = (e) => {

        fetch(process.env.REACT_APP_URL + ('/events/'+ props._id + '/guests/' + guestId) ,{
            method: 'POST',
            headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then(response =>{
            console.log("RESPONSE: " + response.status);
        })
      }

    return (
        <>
            <form onSubmit={newGuestSubmit}>
                <div style={{display:'flex'}}>
                    <Typography variant="subtitle1">
                        Guest List
                    </Typography>

                    <TextField 
                        type="text"
                        required
                        onChange={(e) => setGuestId(e.target.value)}              
                    />
                    <Button type="submit" style={{width:'40%'}} variant="outlined">Add Guest</Button>
                </div>
            </form>

            <ul>
            {
                props.guests.map((value, key) => {
                return (
                    <li key={key}>
                        {value.firstName + " " + value.lastName}
                    </li>
                )
                })
            }
            </ul>
        </>
    )
}