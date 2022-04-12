import React, { useContext } from "react";
import Card from '../components/Card'
import CardGuest from './CardGuest'
import { Box } from "@mui/material";
import { UserContext } from '../context/UserContext';

export default function DisplayCardHelper() {
    const { user } = useContext(UserContext);

    let cards = [];
    for (let i = 0; i < user.events.length; i++) {
        if (user.events[i].admin._id === user._id) {
            cards.push(<Card props={i} key={i} />)
        } else {
            cards.push(<CardGuest props={i} key={i} />)
        }

    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                {cards}
            </Box>
        </>

    )
}
