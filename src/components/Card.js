import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardInfo from '../components/CardInfo.js';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../img/purple-grad.png'; // Import using relative path
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/Alert';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicCard(props){

    const cardStyle = {
        width: 275, height: 300, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', backgroundImage: `url(${Image})`
    }
    const btnStyle={backgroundColor:"#000000", display:'block'}
    const descStyle = { padding: '0 0 0 0', color: '#F5F5F5' }
    const descStyleModal = { padding: '0 0 0 0', color: '#000000' }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid containter alignItems="stretch">
            <Card variant="outlined" style={cardStyle}>
                    <Grid>
                        <CardContent>
                            <div className="wrapper">
                                <Typography variant="h5" style={{color:'#F5F5F5'}}>
                                  {props.title}
                                </Typography>

                                <Typography variant="subtitle2" style={{color:'#F5F5F5'}}>
                                  Date: {props.date}
                                </Typography>

                                <Typography variant="subtitle2" style={{color:'#F5F5F5'}}>
                                  Address: {props.address}
                                </Typography>

                                <Alert severity="info">You have # task(s)</Alert>

                            </div>

                            <Typography variant="body2" style={descStyle}>
                              {props.desc}
                            </Typography>

                          </CardContent>
                      </Grid>

                      <Grid>
                        <CardActions>
                            <Button onClick={handleOpen} type='submit' color='primary' variant='contained' style={btnStyle} fullWidth >{props.button}</Button>
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
                                            title={props.title}
                                            date={props.date}
                                            address={props.address}
                                            button={props.button}
                                            desc={props.desc}
                                        />
                                        </Box>
                                    </Fade>
                                </Modal>
                        </CardActions>
                     </Grid>
                </Card>
            </Grid>
    )
}
