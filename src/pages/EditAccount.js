import { Grid, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import { UserContext } from '../context/UserContext';

const useStyles = makeStyles(() => ({
    field: {
        margin: '5px 0 5px'
    },
    error: {
        fontSize: 14,
        color: '#FF0000',
        margin: '15px 0'
    },
    form: {
        width: '100%'
    }
}))

function EditAccount() {
    const { user, setUser } = React.useContext(UserContext);

    const [username, setUsername] = useState(user.username);
    const [fname, setFname] = useState(user.firstName);
    const [lname, setLname] = useState(user.lastName);
    const [phone, setPhone] = useState(user.phone);

    let navigate = useNavigate();
    const styles = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = {
            'firstName': fname,
            'lastName': lname,
            'username': username,
            'phone': phone
        }

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(process.env.REACT_APP_URL + '/account', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody
        })
            .then(response => {
                console.log(response.status)
                setUser({ ...user, firstName: fname, lastName: lname, phone: phone, username: username })
                navigate('/account')
            })
    }

    return (
        <div>
            <Typography variant='h3'>Edit Account Information</Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={2} >
                    <Grid item xs={6} >
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px' }}>First Name</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            required
                            fullWidth
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px' }}>Username</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            required
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />


                    </Grid>
                    <Grid item xs={6} >
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px' }}>Last Name</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            required
                            fullWidth
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px' }}>Phone</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            required
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Button
                            sx={{ boxShadow: 3, marginTop: 6 }}
                            type='submit'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                            Submit
                        </Button>

                    </Grid>



                </Grid>
            </form>
        </div>
    );
}

export default EditAccount