import React, {useEffect, useState} from 'react'
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
    const { user } = React.useContext(UserContext);
    const [ admin, setAdmin ] = useState(false);
    const navigate = useNavigate();
    const i = props.props

    useEffect(() => {
        if (user.events[i].admin._id == user._id) {
            setAdmin(true)
        } 
    }, [])

    const cardStyle = {
        width: 275, height: 315, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', background: 'linear-gradient(350deg, rgba(45,189,253,1) 0%, rgba(65,68,223,1) 65%)'
    }

    const btnStyle = { backgroundColor: "#000000", display: 'block' }
    const descStyle = { padding: '30px 0 0 0', color: '#F5F5F5' }



    return (
        <Box sx={{paddingRight: 4, paddingBottom: 4}}>
            <Grid container alignItems="stretch">
                <Card style={cardStyle}>
                    <Grid>
                        <CardContent>
                            <div className="wrapper">
                                <Typography variant="h5" style={{ color: '#F5F5F5' }}>
                                    {user.events[i].name}
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
