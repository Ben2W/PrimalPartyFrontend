import React, { useContext } from "react";
import Card from '../components/Card'
import { Box } from "@mui/material";
import { UserContext } from '../context/UserContext';

export default function DisplayCardHelper() {
    const { user } = useContext(UserContext);

    let cards = [];
    for (let i = 0; i < user.events.length; i++) {
        cards.push(<div><Card props={i} key={i} /></div>)
    }

    return (
        <>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {cards}
            </Box>
        </>

    )
}
