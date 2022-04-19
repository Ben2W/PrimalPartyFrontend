import React from 'react'
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';

export default function AssigneeDisplay(props){

    console.log(props)

    return (
        <div>
            <Grid container>
                <Grid item xs={10}>
                    <Typography sx={{ color: '#ffffff', paddingTop: 1.5}}>{props.assigneeInfo.firstName + " " + props.assigneeInfo.lastName}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton type="submit" style={{color: '#ffffff'}} onClick={()=>props.assigneeRemove(props.index)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            
        </div>
    )
}