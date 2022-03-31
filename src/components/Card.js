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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 800,
    background: 'linear-gradient(145deg, #e66465, #9198e5)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicCard(props){

    const cardStyle = {
        width: 275, height: 315, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', background: 'linear-gradient(145deg, #e66465, #9198e5)'
    }

    const btnStyle={backgroundColor:"#000000", display:'block'}
    const descStyle = { padding: '30px 0 0 0', color: '#F5F5F5' }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEventDelete = (e) => {

        e.preventDefault();

        console.log(props.props._id)

        fetch(process.env.REACT_APP_URL + ('/events/'+ props.props._id) ,{
            method: 'DELETE',
            credentials: 'include',
        })
        .then(response =>{
            console.log("RESPONSE: " + response.status);
        })
      }

    return (
        <div>
            <Grid container alignItems="stretch">
                <Card style={cardStyle}>
                    <Grid>
                        <CardContent>
                            <div className="wrapper">
                                <Typography variant="h5" style={{color:'#F5F5F5'}}>
                                  {props.props.name}
                                  <Button onClick={handleEventDelete} type='submit'>Delete Event</Button>
                                </Typography>
                            </div>

                            <Typography 
                                variant="subtitle2" style={{color:'#F5F5F5'}}
                            >
                                Date: {props.props.date}
                            </Typography>

                            <Typography 
                                variant="subtitle2" style={{color:'#F5F5F5'}}
                            >
                                Address: {props.props.address}
                            </Typography>

                            <Typography
                                variant="body2" style={descStyle}
                            >
                                {props.props.description}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid>
                        <Alert severity="info" style={{ margin: '0 15px 0 15px' }}>You have # task(s)</Alert>
                    </Grid>

                    <Grid>
                        <CardActions>
                            <Button onClick={handleOpen} type='submit' color='primary' variant='contained' style={btnStyle} fullWidth >View More</Button>
                            <Modal
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
                                            title={props.props.title}
                                            date={props.props.date}
                                            address={props.props.address}
                                            button="View More"
                                            desc={props.props.description}
                                            tasks={props.props.tasks}
                                            _id={props.props._id}
                                            guests={props.props.guests}
                                        />
                                    </Box>
                                </Fade>
                            </Modal>
                        </CardActions>
                    </Grid>
                </Card>
            </Grid>
        </div>
    );
}
