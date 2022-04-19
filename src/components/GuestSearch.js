import React, { useContext, useEffect, useState } from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material';
import Task from './Task';
import { IconButton } from '@material-ui/core';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import Select from 'react-select';
import { UserContext } from '../context/UserContext';
import { makeStyles } from '@material-ui/core'
import { convertLength } from '@mui/material/styles/cssUtils';

let users = [];

let options = [];


function changeSearch(e) {
    console.log("bruh");
    this.setSearch(e.target.value);
}

function customTheme(theme) {
    return {
        ...theme,
        colors:
        {
            ...theme.colors,
            //primary25: 'orange',
            //primary: 'green',
        }
    }
}

export default function GuestSearch(props) {
    const [search, setSearch] = useState('');
    const { user, setUser } = useContext(UserContext);
    const [usersToAdd, setUsersToAdd] = useState();


    let userId = "";
    let selectString = "";
    options = [];

    console.log("bruh")
    console.log(props)

    for (let i = 0; i < user.friends.length; i++) {
        let isGuest = false;
        for(let j = 0; j < user.events[props.index].guests.length; j++)
        {
            if(user.friends[i].username == user.events[props.index].guests[j].username)
            {
                isGuest = true;
            }
        }

        if(!isGuest)
        {
            userId = "" + user.friends[i]._id;
            selectString = "" + user.friends[i].firstName + " " + user.friends[i].lastName;
            options.push({ value: userId, label: selectString },)
        }
    }

    const searchUsers = async () => {
        fetch(process.env.REACT_APP_URL + '/users?q=' + search, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                users = data.users
            })
    }

    async function postGuests(id, val) {
        const response = await fetch(process.env.REACT_APP_URL + ('/events/' + id + '/guests/' + val), {
            method: 'POST',

            credentials: 'include'
        })
        return response;
    }

    const newGuestSubmit = async (e) => {

        for (let i = 0; i < usersToAdd.length; i++) {

            console.log("TO: " + '/events/' + props._id + '/guests/' + usersToAdd[i].value)

            const guestResponse = await postGuests(props._id, usersToAdd[i].value)

            if (guestResponse.status == 200) {
                const data = await guestResponse.json();

                const temp = user;

                const tempGuests = temp.events[props.index].guests;

                tempGuests.push(data.newGuest);

                temp.events[props.index].guests = tempGuests;

                setUser(temp);

                localStorage.setItem('user', JSON.stringify(temp))
            }
        }
        //props.searchUpdate()

        props.update()
    }

    return (
        <form >
            <Grid container>
                <Grid item xs={8}>
                    <Select
                        fullWidth
                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                        menuPortalTarget={document.body} 
                        isSearchable={true}
                        isMulti
                        theme={customTheme}
                        options={options}
                        placeholder="Add User"
                        defaultValue=""
                        onChange={(e) => setUsersToAdd(e)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        style={{ fontSize: '18px', fontWeight: 600, paddingRight: 10, paddingLeft: 10 }}
                        onClick={newGuestSubmit}
                        size='small'
                        variant='contained'
                        fullWidth
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>

        </form>
    )
}
