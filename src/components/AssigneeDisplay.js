import React from 'react'
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';

export default function AssigneeDisplay(props){
    return (
        <div>
            {props.assignees}
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}