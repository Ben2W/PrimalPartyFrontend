import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const MyEventsItem = (props) => {
    const { user } = React.useContext(UserContext);
    const navigate = useNavigate();
    const i = props.props
    return (
        <div>
            <List>
                <ListItem button>
                    <ListItemIcon sx={{marginLeft: "50px", color:'#ffffff' }}>
                        {IconHelper(8)}
                    </ListItemIcon>
                    <ListItemText onClick={() => navigate('/eventadmin/' + i)} primary={user.events[i].name} sx={{ marginLeft: '-23px', color: '#ffffff'}}/>
                </ListItem>
            </List>
        </div>
    );
}

export default MyEventsItem;