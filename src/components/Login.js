import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Login = ({handleChange}) => {
    const paperStyle={padding: 20, minheight: '32vh', width:280, margin: "10px auto"}
    const avatarStyle={backgroundColor:'black'}
    const btnstyle={margin:'8px 0'}

    //Change the value in the useState to show string in the form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (e) => {
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

        fetch(process.env.REACT_APP_URL + '/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody,
        })
        .then(response => {
            if(!response.ok) {
                throw Error('could not fetch the data for that resource')
            }
            return response.json();
        })
        .then((data) => {
            setIsPending(false);
            navigate('/dashboard');
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div>
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align="center" >
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2> 
                    </Grid>
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

                        { !isPending && <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            style={btnstyle}
                            fullWidth
                        >
                            Sign In
                        </Button> }

                        { isPending && <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            style={btnstyle}
                            fullWidth
                        >
                            Signing In
                        </Button> }
                    </form>

                    <Typography
                        component={'span'}
                    >
                        <Link
                            href="#"
                        >
                            Forgot Password?
                        </Link>
                        <br/>
                    </Typography>
                    <Typography
                        component={'span'}
                    >
                        Dont have an account? &nbsp;
                        <Link
                            href="#" 
                            onClick={()=>handleChange("event", 1)}
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
