import React from "react";
import MyEventsItem from "./MyEventsItem"
import ListItem from "@mui/material/ListItem";


export default function MyEventsHelper(props){
    console.log(props.props)

    let events = [];
    for (var i=0; i<props.props.length; i++) {
        events.push(<MyEventsItem props = { props.props[i] } />)
    }

    return (
        <ListItem button>
            {events}
        </ListItem>
    )
}
