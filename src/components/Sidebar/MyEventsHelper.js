import React from "react";
import MyEventsItem from "./MyEventsItem"

export default function MyEventsHelper(props){
    
    let events = [];
    for (var i=0; i<props.props.length; i++) {
        events.push(<MyEventsItem props = { props.props[i] } key={ i } />)
    }

    return (
        <>
            {events}
        </>
    )
}
