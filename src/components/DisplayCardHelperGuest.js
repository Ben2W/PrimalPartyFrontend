import React from "react";
import CardGuest from '../components/CardGuest'
import { Box } from "@mui/material";


export default function DisplayCardHelperGuest(props){

    let cards = [];
    for (var i=0; i<props.props.length; i++) {
        cards.push(<CardGuest props = { props.props[i] } key ={ i } />)
    }

    return (
        <Box sx={{display: 'inline-flex', flexDirection:'row'}}>
            {cards}
        </Box>
    )
}
