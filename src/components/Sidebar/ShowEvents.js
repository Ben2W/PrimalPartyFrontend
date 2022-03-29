import React, { useState } from 'react';
import MyEvents from "./MyEvents"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from '@mui/material';
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';

const ShowEvents = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const bruh = <MyEvents/>

    return(
        <>
            <ListItem button onClick={() => setChecked(prev => !prev)}>
                <ListItemIcon>
                    {IconHelper(5)}
                </ListItemIcon>
                <ListItemText primary='My Events'/>
            </ListItem>
            <Collapse in={checked}>
                {bruh}
            </Collapse>

        </>
    );
}

export default ShowEvents