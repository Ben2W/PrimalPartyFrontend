import React from "react";
import IconHelper from "../IconHelper"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextHelper from "./TextHelper"

export default function ListItemHelper(id){
    return (
        <div>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        {IconHelper(id)}
                    </ListItemIcon>
                    <ListItemText primary={TextHelper(id)}/>
                </ListItem>
            </List>
        </div>
    )
}
