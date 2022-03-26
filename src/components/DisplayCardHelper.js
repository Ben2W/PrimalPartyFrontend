import React from "react";
import Card from '../components/Card'
import { Box } from "@mui/material";


export default function DisplayCardHelper(props){
    console.log(props.props)

    let cards = [];
    for (var i=0; i<props.props.length; i++) {
        cards.push(<Card props = { props.props[i] } />)
    }

    return (
        <div>
            {cards}
        </div>
    )
}
