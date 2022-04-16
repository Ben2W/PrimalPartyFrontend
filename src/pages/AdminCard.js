import { Grid, TextField, Button, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import GuestSearch from '../components/GuestSearch';
import Table from '../components/Table';
import GuestList from '../components/GuestList';
import { UserContext } from '../context/UserContext'

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
    },
    page: {
        width: '100%'
    }
}))

const AdminCard = () => {
    const styles = useStyles()
    let navigate = useNavigate()
    let { id } = useParams();
    const { user, setUser } = useContext(UserContext);
    const event = user.events[id];
    console.log(event);

    const [value, setValue] = useState(0); // integer state

    function useForceUpdate(){
        console.log("Fucking user")
        console.log(user);
        return () => setValue(value => value + 1); // update the state to force render
    }

    const handleDelete = () => {

        fetch(process.env.REACT_APP_URL + ('/events/' + event._id), {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(() => {
                const temp = user;
                const reducedEvents = user.events;
                console.log('reducedEvents')
                console.log(reducedEvents)

                const Newarr = reducedEvents.filter((reducedEvents) => reducedEvents !== event)

                temp.events = Newarr;
                console.log('NewArr')
                console.log(Newarr)

                temp.events = Newarr
                console.log(temp)

                setUser(temp)
                localStorage.setItem('user', JSON.stringify(temp))

                navigate('/dashboard')
            })
    }

    return (
        <div className={styles.page}>
            <Typography variant='h3' sx={{ color: '#ffffff'}}>{event.name}</Typography>
            <Grid container>
                <Grid item xs={1}>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Date: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Place: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>About: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Guests: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>Tasks: </Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold', color: '#ffffff' }}>List: </Typography>

                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.date}</Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.address}</Typography>
                    <Typography variant='h5' sx={{ marginTop: 3, color: '#ffffff' }}>{event.description}</Typography>
                    <GuestSearch _id={event._id} index={id} update={useForceUpdate()}/>
                    <Table tasks={event.tasks} index = {id} _id={event.id} guests={event.guests} />
                    <GuestList guests={event.guests} index={id} _id={event._id} update={useForceUpdate()}/>


                </Grid>
                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                    <Grid item xs={3}>
                        <Button
                            sx={{ boxShadow: 3 }}
                            xs={3}
                            type='submit'
                            size='large'
                            variant='contained'
                            // onClick={() => navigate('/editaccount')}
                            fullWidth
                        >
                            Edit Information
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ boxShadow: 3 }}
                            xs={3}
                            type='submit'
                            size='large'
                            variant='contained'
                            onClick={handleDelete}
                            fullWidth
                        >
                            Delete Event
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </div >
    );
}

export default AdminCard