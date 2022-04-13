import React, { useState } from 'react';
import MyEvents from "./MyEvents"
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ShowEvents = () => {
    const [checked, setChecked] = React.useState(false);
    const bruh = <MyEvents/>

    return(
        <div>
            <ListItem 
                button 
                onClick={() => setChecked(prev => !prev)}
            >
                <ListItemIcon sx={{ color: '#ffffff' }}>
                    {IconHelper(5)}
                </ListItemIcon>
                <ListItemText primary='My Events'/>
                {checked
                    ? <ArrowDropUpIcon style={{marginRight: "5%",}}/>
                    : <ArrowDropDownIcon style={{marginRight: "5%",}}/>
                }
            </ListItem>
            <Collapse
                in={checked}
            >
                {bruh}
            </Collapse>
        </div>
    );
}

export default ShowEvents