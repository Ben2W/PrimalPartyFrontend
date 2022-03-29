import React from "react";
import MyEventsItem from "./MyEventsItem"
import ListItem from "@mui/material/ListItem";
import {Paper, TextField} from "@mui/material";

export default function MyEventsHelper(props){
    console.log(props.props)

    let events = [];
    for (var i=0; i<props.props.length; i++) {
        events.push(<MyEventsItem props = { props.props[i] } />)
    }


    return (
        // <Paper elevation={8} sx={{width: "drawerWidth", padding: "5px", marginLeft: "10px"}}>
        <div>
            {events}
        </div>
        // </Paper>
    )
}
