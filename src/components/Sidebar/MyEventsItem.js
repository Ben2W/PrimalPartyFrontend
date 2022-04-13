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
                    <ListItemIcon sx={{marginLeft: "50px", color:'#ffffff' }}>
                        {IconHelper(8)}
                    </ListItemIcon>
                    <ListItemText primary={props.props.name} sx={{ marginLeft: '-23px', color: '#ffffff'}}/>
                </ListItem>
            </List>
        </div>
    );
}

export default MyEventsItem;