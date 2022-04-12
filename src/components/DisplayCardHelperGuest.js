import React from "react";
import CardGuest from '../components/CardGuest'
import { Box } from "@mui/material";
import { UserContext } from '../context/UserContext';


export default function DisplayCardHelperGuest(props){
    const { user } = React.useContext(UserContext);

    let cards = [];
    for (var i=0; i<user.events.length; i++) {
        cards.push(<CardGuest props = { user.events[i] } key ={ i } />)
    }

    return (
        <Box sx={{display: 'inline-flex', flexDirection:'row'}}>
            {cards}
        </Box>
    )
}
