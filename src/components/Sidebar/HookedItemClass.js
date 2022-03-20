import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

const HookedItemClass = (props) => {
    return (
        <div>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        {IconHelper(props.id)}
                    </ListItemIcon>
                    <ListItemText primary={props.name}/>
                </ListItem>
            </List>
        </div>
    );
}

export default HookedItemClass;