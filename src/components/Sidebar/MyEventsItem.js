import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

const MyEventsItem = (props) => {
    return (
        <div>
            <List>
                <ListItem button>
                    <ListItemText primary={props.props.name}/>
                </ListItem>
            </List>
        </div>
    );
}

export default MyEventsItem;