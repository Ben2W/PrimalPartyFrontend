import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
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
import '../App.css';
import Table from '../components/Table.js';



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

export default function CardInfo(props){

    const cardStyle={width:250, height: 275, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}
    const btnStyle = { backgroundColor:"#F5F5F5"}
    const descStyle = { padding: '0 0 0 0', color: '#F5F5F5' }
    const descStyleModal = { padding: '0 0 0 0', color: '#F5F5F5' }

    return (
        <Grid>
            <CardContent>
                <div className="wrapper">
                    <Typography variant="h5" style={{ color: '#F5F5F5' }}>
                        {props.title}
                    </Typography>

                    <Typography variant="subtitle2" style={{ color: '#F5F5F5' }}>
                        Date: {props.date}
                    </Typography>

                    <Typography variant="subtitle2" style={{ color: '#F5F5F5' }}>
                        Address: {props.address}
                    </Typography>
                </div>

                <Typography variant="body2" style={descStyleModal}>
                    {props.desc}
                </Typography>

                <Alert severity="info">
                    Bring Pizza
                </Alert>
            </CardContent>

            <Table />
        </Grid>


    )
}
