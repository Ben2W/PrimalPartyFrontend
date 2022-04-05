import React from 'react'
import { Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import '../App.css';
import Table from '../components/Table';
import GuestList from '../components/GuestList';
import GuestSearch from './GuestSearch';

export default function CardInfo(props){
    const descStyleModal = { padding: '0 0 0 0', color: '#F5F5F5' }

    console.log(props.guestList);


    return (
        <div>
            <Grid>
                <CardContent>
                    <Typography
                        variant="h5"
                        style={{ color: '#F5F5F5' }}
                    >
                        {props.title}
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        style={{ color: '#F5F5F5' }}
                    >
                        Date: {props.date}
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        style={{ color: '#F5F5F5' }}
                    >
                        Address: {props.address}
                    </Typography>

                    <Typography
                        variant="body2"
                        style={descStyleModal}
                    >
                        {props.desc}
                    </Typography>

                    <Alert severity="info">
                        Bring Pizza
                    </Alert>
                </CardContent>
                <GuestSearch _id = {props._id}/>
                <GuestList guests={props.guests} _id = {props._id}/>
                <Table tasks={props.tasks} _id={props._id}/>   
            </Grid>
        </div>
    )
}
