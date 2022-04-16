import React, { useEffect, useState } from 'react'
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
import { color } from '@mui/system';
import Moment from 'react-moment'

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
    const { user } = React.useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const [color, setColor] = useState('');
    const navigate = useNavigate();
    const i = props.props

    function getBackground() {
        const colors = [
            'linear-gradient(350deg, rgba(45,189,253,1) 0%, rgba(65,68,223,1) 65%)',
            'linear-gradient(350deg, rgba(91,144,168,1) 0%, rgba(18,21,139,1) 70%)',
            'linear-gradient(350deg, rgba(91,124,168,1) 0%, rgba(62,18,139,1) 70%)',
            'linear-gradient(350deg, rgba(91,168,161,1) 0%, rgba(18,110,139,1) 70%)',
            'linear-gradient(350deg, rgba(91,109,168,1) 0%, rgba(69,18,139,1) 70%)',
            'linear-gradient(350deg, rgba(153,91,168,1) 0%, rgba(62,18,139,1) 70%)',
            'linear-gradient(348deg, rgba(168,91,91,1) 0%, rgba(48,18,139,1) 70%)',
            'linear-gradient(348deg, rgba(168,91,91,1) 0%, rgba(154,91,162,1) 3%, rgba(18,81,139,1) 70%)'
        ]
        return colors[Math.floor(Math.random() * colors.length)]
    }

    useEffect(() => {
        if (user.events[i].admin._id == user._id) {
            setAdmin(true)
        }
        setColor(getBackground());

    }, [])



    const cardStyle = {
        width: 275, height: 330, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', background: color
    }

    const btnStyle = { backgroundColor: "#000000", display: 'block' }
    const descStyle = { padding: '30px 0 0 0', color: '#F5F5F5' }



    return (
        <Box sx={{ paddingRight: 4, paddingBottom: 4 }}>
            <Grid container alignItems="stretch">
                <Card style={cardStyle}>
                    <Grid>
                        <CardContent>
                            <div className="wrapper">
                                <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#ffffff' }} style={{marginBottom: '10px'}}>
                                    {user.events[i].name}
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant='p' sx={{ fontWeight: 300, color: '#ffffff' }}
                                >
                                    <Moment format='MMMM Do YYYY, h:mm'>
                                        {user.events[i].date}
                                    </Moment>
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant='p' sx={{ fontWeight: 300, color: '#ffffff' }} style={{ paddingTop: '10px' }}
                                >
                                    Address: {user.events[i].address}
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant='body2' sx={{ fontWeight: 300, color: '#ffffff' }} style={{paddingTop: '25px'}}
                                >
                                    {user.events[i].description}
                                </Typography>
                            </div>
                        </CardContent>
                    </Grid>
                    <Grid>
                        <CardActions>
                            {admin
                                ? <Button type='submit' onClick={() => navigate('/eventadmin/' + i)} color='primary' variant='contained' style={btnStyle} fullWidth >View & Edit</Button>
                                : <Button type='submit' onClick={() => navigate('/event/' + i)} color='primary' variant='contained' style={btnStyle} fullWidth >View More</Button>
                            }
                        </CardActions>
                    </Grid>
                </Card>
            </Grid>
        </Box>
    );
}
