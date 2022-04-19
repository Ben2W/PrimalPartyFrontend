import { Grid, TextField, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateTimePicker from '@mui/lab/StaticDateTimePicker';
import { UserContext } from '../context/UserContext'

const useStyles = makeStyles(() => ({
    field: {
        margin: '5px 0 5px',
        backgroundColor: '#ffffff'
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

function EditEvent() {
    const { user, setUser } = useContext(UserContext);
    let { id } = useParams();
    console.log('user')
    console.log(user)

    const [title, setTitle] = useState(user.events[id].name);
    const [description, setDescription] = useState(user.events[id].description);
    const [value, setValue] = useState(new Date(user.events[id].date));
    const [address, setAddress] = useState(user.events[id].address);

    let navigate = useNavigate();
    const CHARACTER_LIMIT = 100;

    const styles = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = {
            'name': title,
            'description': description,
            'address': address,
            'date': value
        }

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(process.env.REACT_APP_URL + '/events/' + user.events[id]._id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            credentials: 'include',
            body: formBody
        })
            .then(response => {
                if (!response.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return response.json();
            })
            .then((data) => {
                const tempUser = user;
                const temp = user.events[id];
                temp.name = title;
                temp.description = description;
                temp.date = value;
                temp.address = address;

                tempUser.events[id] = temp;

                setUser(tempUser);

                localStorage.setItem('user', JSON.stringify(tempUser))

                navigate('/eventadmin/' + id);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <Typography variant='h3' sx={{ color: '#ffffff' }}>Edit Event</Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={2} >
                    <Grid item xs={6} >
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px', color: '#ffffff' }}>Title</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            required
                            fullWidth
                            variant="filled"
                            label="Give your event a new title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px', color: '#ffffff' }}>Description</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            fullWidth
                            multiline
                            variant="filled"
                            rows={3}
                            label="Give your event a new description"
                            value={description}
                            helperText={`${description.length}/${CHARACTER_LIMIT}`}
                            inputProps={{ maxLength: CHARACTER_LIMIT }}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px', color: '#ffffff' }}>Place</Typography>
                        <TextField
                            className={styles.field}
                            type="text"
                            required
                            variant="filled"
                            fullWidth
                            label="Enter your event's new location"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold', margin: '15px 0 5px', color: '#ffffff' }}>Date and Time</Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label=' '
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Button
                        sx={{ boxShadow: 3 }}
                        type='submit'
                        size='large'
                        variant='contained'
                        fullWidth
                    >
                        Save Changes
                    </Button>
                </Grid>
            </form>
        </div>
    );
}

export default EditEvent