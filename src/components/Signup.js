import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Signup =({handleChange})=>{
    const paperStyle={padding: 20, height: '32vh', width:280, margin: "10px auto"}
    const avatarStyle={backgroundColor:'black'}
    const btnstyle={margin:'8px 0'}

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2> 
                </Grid>

                <TextField label='Name' placeholder='Enter name' fullWidth required/>
                <TextField label='Email' placeholder='Enter email' fullWidth required/>
                <TextField label='Phone Number' placeholder='Enter phone' fullWidth required/>
                <TextField label='Password' placeholder='Create Password' type="password" fullWidth required/>
                <TextField label='Confirm Password' placeholder='Confirm Password' type="password" fullWidth required/>

            <Button type='submit' color='primary' variant='contained'style={btnstyle} fullWidth >Sign Up</Button>
            <Typography> Already have an account? 
                <Link href="#" onClick={()=>handleChange("event", 0)}> Sign In</Link>
            </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;
