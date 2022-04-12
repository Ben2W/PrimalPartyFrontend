import React, { useState, useContext } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { UserContext } from '../context/UserContext';

function Verify() {
    const { auth, setAuth } = useAuth();
    const { setUser } = useContext(UserContext);

    const paperStyle = { padding: 20, minheight: '32vh', width: 280, margin: "10px auto" }
    const btnstyle = { margin: '8px 0' }

    const [token, setToken] = useState('');

    let navigate = useNavigate();

    async function authUser(token) {
        const response = await fetch(process.env.REACT_APP_URL + '/authorize/' + token, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            credentials: 'include'
        })
        const data = await response.json();
        return data;
    }

    async function loadEvents() {
        const response = await fetch(process.env.REACT_APP_URL + '/events', {
            method: 'GET',

            credentials: 'include'
        })
        const data = await response.json();
        return data;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerData = await authUser(token);
        const eventData = await loadEvents();

        registerData.user.events = eventData.events
        const username = registerData.user.username
        console.log(registerData);

        setAuth({ username });

        console.log('auth verify')
        console.log(auth)
        setToken('');

        setUser(registerData.user);



        navigate('/dashboard')
    }

    return (
        <div>
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align="center" >
                        <h2>Authenticate Email</h2>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            required
                            fullWidth
                            label="Enter Token"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                        />
                        <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            style={btnstyle}
                            fullWidth
                        >
                            Verify
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Verify