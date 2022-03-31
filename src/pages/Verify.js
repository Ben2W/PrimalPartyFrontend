import React, { useState } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

function Verify() {
    const paperStyle={padding: 20, minheight: '32vh', width:280, margin: "10px auto"}
    const btnstyle={margin:'8px 0'}

    const [token, setToken] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_URL + '/authorize/' + token, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            credentials: 'include'
        })
        .then(response => {
            console.log(response.status);
            if(!response.ok) {
                throw Error('could not fetch the data for that resource')
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
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