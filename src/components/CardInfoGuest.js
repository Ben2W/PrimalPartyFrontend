import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import '../App.css';
import TableGuest from '../components/TableGuest.js';



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

export default function CardInfoGuest(props){

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
            <TableGuest tasks={props.tasks} _id={props._id}/>   
        </Grid>


    )
}
