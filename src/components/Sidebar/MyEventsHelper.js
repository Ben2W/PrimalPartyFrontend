import React, { useContext } from "react";
import MyEventsItem from "./MyEventsItem"
import { UserContext } from '../../context/UserContext'

export default function MyEventsHelper(props) {
    const { user } = useContext(UserContext)

    let events = [];
    for (var i = 0; i < props.props.length; i++) {
        if (user.events[i].admin._id == user._id) {
            events.push(<MyEventsItem props={i} key={i} />)
        }

    }

    return (
        <>
            {events}
        </>
    )
}
