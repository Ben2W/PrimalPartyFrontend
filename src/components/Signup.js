import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const local = 'http://localhost:8080/register'
const main = 'https://primalpartybackend.azurewebsites.net/login'

const Signup = ({handleChange}) => {
    const paperStyle={padding: 20, minheight: '32vh', width:280, margin: "10px auto"}
    const avatarStyle={backgroundColor:'black'}
    const btnstyle={margin:'8px 0'}

    //Change the value in the useState to show string in the form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');

    const [isPending, setIsPending] = useState(false);
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

        fetch(main,  {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: formBody
        })
        .then(response => {
            console.log(response.status);
            if(!response.ok) {
                throw Error('could not fetch the data for that resource')
            }
            return response.json();
        })
        .then(() => {
            setIsPending(false);
            navigate('/dashboard');
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center" >
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2> 
                </Grid>
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
                            type="text"
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

            <Typography component={'span'}>
                <Link href="#">Forgot Password?</Link>
            </Typography>
            <Typography component={'span'}> Do you have an account? 
                <Link href="#" onClick={()=>handleChange("event", 0)}> 
                Sign Up</Link>
            </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;
