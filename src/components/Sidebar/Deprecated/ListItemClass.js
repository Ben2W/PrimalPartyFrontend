import React from "react";
import IconHelper from "../IconHelper"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import TextHelper from "./TextHelper"

export default class ListItemClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name
        };
    }
    render() {
        return (
            <div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            {IconHelper(this.state.id)}
                        </ListItemIcon>
                        <ListItemText primary={this.state.name}/>
                    </ListItem>
                </List>
            </div>
        );
    }
}