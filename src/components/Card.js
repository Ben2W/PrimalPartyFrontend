import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export default function BasicCard(props){

    const paperStyle={padding: 20, height: '32vh', width:280, margin: "10px auto"}

    return (
        <Card sx={{minWidth:275}}>
            <div className="card_body">
                <div>
                    <h2 className="cardTitle">{props.title}</h2>
                    <p className="date">{props.date}</p>
                    <p className="cardDesc">{props.desc}</p>
                    <button className="card_btn">{props.button}</button>
                </div>

            </div>
        </Card>
    )
}
