import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Card(props){
    return (
        <div className="card">
            <div className="card_body">
                <div>
                    <h2 className="cardTitle">{props.title}</h2>
                    <p className="date">{props.date}</p>
                    <img src={props.img}/>
                    <p className="cardDesc">{props.desc}</p>
                    <button className="card_btn">{props.button}</button>
                </div>

            </div>
        </div>
        )
    }

export default Card;
