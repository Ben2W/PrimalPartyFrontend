import React, { useContext, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import { UserContext } from '../context/UserContext';

const useStyles = makeStyles(() => ({
    paper: {
        padding: 15,
        minheight: '32vh',
        width: 280,
        margin: "10px auto",
        fontSize: 20
    },
    avatar: {
        backgroundColor: 'black',
    },
    button: {
        margin: '8px 0',
        backgroundColor: '#17171A',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 600,
        '&:hover': {
            backgroundColor: '#fff',
            color: '#17171A'
        }
    },
    error: {
        fontSize: 14,
        color: '#FF0000',
        margin: '15px 0'
    }
}))


const Login = ({ handleChange }) => {
    const { setUser } = useContext(UserContext);

    const styles = useStyles()

    //Change the value in the useState to show string in the form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    let navigate = useNavigate();

    async function loginUser(formBody) {
        const response = await fetch(process.env.REACT_APP_URL + '/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody,
        })
        // const data = await response.json();
        return response;
    }

    async function loadEvents() {
        const response = await fetch(process.env.REACT_APP_URL + '/events', {
            method: 'GET',

            credentials: 'include'
        })
        const data = await response.json();
        return data;
    }

    async function loadFriends() {
        const response = await fetch(process.env.REACT_APP_URL + '/friends', {
            method: 'GET',

            credentials: 'include'
        })
        const data = await response.json();
        return response;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const details = {
            'username': username,
            'password': password
        };

        setIsPending(true);

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const loginResponse = await loginUser(formBody);
        switch (loginResponse.status) {
            case 200:
                const loginData = await loginResponse.json();
                const eventData = await loadEvents();
                const friendData = await loadFriends();

                loginData.user.events = eventData.events
                loginData.user.friends = friendData.friends
                console.log(loginData);

                setUser(loginData.user);
                localStorage.setItem('user', JSON.stringify(loginData.user))

                setUsername('');
                setPassword('');

                setIsPending(false);

                navigate('/dashboard')
            case 400:
                setErrorMessage('User not found OR Wrong Password OR Email not authenticated')
                break;
            case 500:
                setErrorMessage('Issue logging in')
                break;
        }



    }

    return (
        <div>
            <Grid>
                <Paper className={styles.paper} elevation={0}>
                    <Grid align="center" >
                        <Avatar className={styles.avatar}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    {errorMessage && (
                        <p className={styles.error}> {errorMessage} </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            component={'span'}
                            type="text"
                            required
                            fullWidth
                            label="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            component={'span'}
                            type="password"
                            required
                            fullWidth
                            label="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {!isPending && <Button
                            type='submit'
                            variant='contained'
                            className={styles.button}
                            fullWidth
                        >
                            Sign In
                        </Button>}

                        {isPending && <Button
                            type='submit'
                            variant='contained'
                            className={styles.button}
                            fullWidth
                        >
                            Signing In
                        </Button>}
                    </form>

                    <Typography
                        component={'span'}
                    >
                        <Link
                            href="/forgotpassword"
                        >
                            Forgot Password?
                        </Link>
                        <br />
                    </Typography>
                    <Typography
                        component={'span'}
                    >
                        Dont have an account? &nbsp;
                        <Link
                            href="#"
                            onClick={() => handleChange("event", 1)}
                        >
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>

    )
}

export default Login;