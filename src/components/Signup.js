import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    paper: {
        padding: 20, 
        minheight: '32vh', 
        width:280, 
        margin: "10px auto",
        fontSize: 20,

    },
    avatar: {
        backgroundColor:'black',
    },
    button: {
        margin:'8px 0', 
        backgroundColor: '#17171A', 
        color: '#ffffff', 
        fontSize: 14, 
        fontWeight: 600,
        '&:hover': {
            backgroundColor: '#fff',
            color: '#17171A'
        }
    },
    error : {
        fontSize: 14,
        color: '#FF0000',
        margin: '15px 0'
    }
}))

const Signup = ({handleChange}) => {
    const styles = useStyles()

    //Change the value in the useState to show string in the form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');

    const [isPending, setIsPending] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = {
            'username': username,
            'password': password,
            'email': email,
            'firstName': fname,
            'lastName': lname,
            'phone': phone
        };

        setIsPending(true);

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        console.log(formBody);

        fetch(process.env.REACT_APP_URL + '/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody,
        })
        .then(response => {
            console.log(response.status);
            switch(response.status) {
                case 200:
                    setIsPending(false);
                    navigate('/verify')
                    break;
                case 410:
                    setErrorMessage('Username and Email already taken.')
                    setIsPending(false);
                    break;
                case 411:
                    setErrorMessage('Email already taken.');
                    setIsPending(false);
                    break;
                case 412:
                    setErrorMessage('Username already taken.');
                    setIsPending(false);
                    break;
                case 500:
                    setErrorMessage('Issue creating account');
                    setIsPending(false);
                    break;
                case 411:
                    setErrorMessage('Email unable to be sent');
                    setIsPending(false);
                    break;
            }
        })
    }

    return (
        <div>
            <Grid>
                <Paper className={styles.paper}>
                    <Grid align="center" >
                        <Avatar className={styles.avatar}><LockOutlinedIcon/></Avatar>
                        <h2>Sign Up</h2> 
                    </Grid>
                    {errorMessage && (
                            <p className={styles.error}> {errorMessage} </p>
                        )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            required
                            fullWidth
                            label="Enter Username"
                            value={username}    
                            onChange={(e) => setUsername(e.target.value)}            
                        /><br/>
                        <TextField
                            type="password"
                            required   
                            fullWidth
                            label="Enter Password"
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)}             
                        /><br/>
                        <TextField
                            type="text"
                            required   
                            fullWidth
                            label="Enter Email Address"
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}             
                        /><br/>
                        <TextField
                            type="text"
                            required   
                            fullWidth
                            label="Enter First Name"
                            value={fname}  
                            onChange={(e) => setFname(e.target.value)}             
                        /><br/>
                        <TextField
                            type="text"
                            required   
                            fullWidth
                            label="Enter Last Name"
                            value={lname}  
                            onChange={(e) => setLname(e.target.value)}             
                        /><br/>
                        <TextField
                            type="text"
                            required   
                            fullWidth
                            label="Enter Phone Number"
                            value={phone}  
                            onChange={(e) => setPhone(e.target.value)}             
                        /><br/>

                        { !isPending && <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            className={styles.button}
                            fullWidth
                        >
                            Sign In
                        </Button> }

                        { isPending && <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            className={styles.button}
                            fullWidth
                        >
                            Signing In
                        </Button> }
                    </form>

                    <Typography
                        component={'span'}
                    >
                        Already have an account? &nbsp;
                        <Link
                            href="#"
                            onClick={()=>handleChange("event", 0)}
                        > 
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
}

export default Signup;
