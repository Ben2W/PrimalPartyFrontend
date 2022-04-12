import React from 'react'
import { Grid, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardInfo from '../components/CardInfo.js';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    background: 'linear-gradient(145deg, #e66465, #9198e5)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicCard(props) {
    const { user, setUser } = React.useContext(UserContext);
    const navigate = useNavigate();
    const i = props.props
    // console.log("index")
    // console.log(i)
    // console.log('User index')
    // console.log(user.events)

    const cardStyle = {
        width: 275, height: 315, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', background: 'linear-gradient(145deg, #e66465, #9198e5)'
    }

    const btnStyle = { backgroundColor: "#000000", display: 'block' }
    const descStyle = { padding: '30px 0 0 0', color: '#F5F5F5' }

    const [open, setOpen] = React.useState(false);

    // const handleOpen = () => setOpen(true);
    // const handleOpen = () => {
    //     navigate('/event', { state: {
    //         index: i
    //     }})
    // }
    const handleClose = () => setOpen(false);

    const handleEventDelete = (e) => {
        e.preventDefault();


        // fetch(process.env.REACT_APP_URL + ('/events/' + user.events[i]._id), {
        //     method: 'DELETE',
        //     credentials: 'include',
        // })
        //     .then(() => {
        //         const temp = user;
        //         const reducedEvents = user.events;
        //         console.log('sad')
        //         console.log(reducedEvents)

        //         const Newarr = reducedEvents.filter((reducedEvents) => reducedEvents._id !== user.events[i]._id)

        //         temp.events = Newarr;
        //         console.log('blah')
        //         console.log(Newarr)
        //         setUser(temp);
        //     })
    }

    return (
        <div>
            <Grid container alignItems="stretch">
                <Card style={cardStyle}>
                    <Grid>
                        <CardContent>
                            <div className="wrapper">
                                <Typography variant="h5" style={{ color: '#F5F5F5' }}>
                                    {user.events[i].name}
                                    <Button onClick={handleEventDelete} type='submit'>Edit</Button>
                                </Typography>
                            </div>

                            <Typography
                                variant="subtitle2" style={{ color: '#F5F5F5' }}
                            >
                                Date: {user.events[i].date}
                            </Typography>

                            <Typography
                                variant="subtitle2" style={{ color: '#F5F5F5' }}
                            >
                                Address: {user.events[i].address}
                            </Typography>

                            <Typography
                                variant="body2" style={descStyle}
                            >
                                {user.events[i].description}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid>
                        <Alert severity="info" style={{ margin: '0 15px 0 15px' }}>You have # task(s)</Alert>
                    </Grid>

                    <Grid>
                        <CardActions>
                            <Button type='submit' onClick={() => navigate('/event/' + i)} color='primary' variant='contained' style={btnStyle} fullWidth >View More</Button>
                            {/* <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <CardInfo
                                            title={user.events[i].title}
                                            date={user.events[i].date}
                                            address={user.events[i].address}
                                            button="View More"
                                            desc={user.events[i].description}
                                            tasks={user.events[i].tasks}
                                            _id={user.events[i]._id}
                                            guests={user.events[i].guests}
                                        />
                                    </Box>
                                </Fade>
                            </Modal> */}
                        </CardActions>
                    </Grid>
                </Card>
            </Grid>
        </div>
    );
}
