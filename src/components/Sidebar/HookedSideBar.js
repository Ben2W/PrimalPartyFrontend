import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import ListItemHelper from "./ListItemHelper"
// import PrimalJetLogo from "./resizedLogo.png"
// import ListItemClass from "./ListItemClass"
import defaultLogo from "./defaultLogo.png"
import {Paper, TextField} from "@mui/material";
import {useNavigate, Link} from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from '@mui/material';
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";



const drawerWidth = 240;

const HookedSideBar = (props) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/dashboard");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_URL + '/logout', {
          method: 'POST',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          },
          credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          navigate('/');
        })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Paper variant="outlined" sx={{width: "drawerWidth", display: "flex", padding: "5px"}}>
                    <img src={defaultLogo} alt="PrimalJetLogo" width="25%" />
                        <Typography variant="h5" align = "center">
                            <div
                                style={{ marginTop: '15px', cursor:"pointer", fontSize: '23px', fontWeight: 600}}
                                onClick={handleClick}
                            >
                                &nbsp;&nbsp;&nbsp;PrimalParty</div>
                        </Typography>
                </Paper>
                {/*<Toolbar /> We can replace this with a function to close the sidebar, for now it's a permanent sidebar*/}
                    <Box sx={{ overflow: 'auto', marginLeft: 1 }}>
                    <List>
                        <ListItem button component={Link} to='/account'>
                            <ListItemIcon>
                                {IconHelper(1)}
                            </ListItemIcon>
                            <ListItemText primary={props.user.firstName + " " + props.user.lastName}/>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button component={Link} to='/dashboard'>
                            <ListItemIcon>
                                {IconHelper(2)}
                            </ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button component={Link} to="/invites">
                            <ListItemIcon>
                                {IconHelper(3)}
                            </ListItemIcon>
                            <ListItemText primary='Invites'/>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button component={Link} to="/friends">
                            <ListItemIcon>
                                {IconHelper(4)}
                            </ListItemIcon>
                            <ListItemText primary='Friends'/>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button >
                            <ListItemIcon>
                                {IconHelper(5)}
                            </ListItemIcon>
                            <ListItemText primary='My Events'/>
                        </ListItem>
                    </List>

                    {/* Component that prints users created events */}

                    <List>
                        <ListItem button component={Link} to='/createparty'>
                            <ListItemIcon>
                                {IconHelper(6)}
                            </ListItemIcon>
                            <ListItemText primary='Create'/>
                        </ListItem>
                    </List>

                    <List>
                        <ListItemButton
                            onClick={handleSubmit}
                        >
                            <ListItemIcon>
                                {IconHelper(7)}
                            </ListItemIcon>
                            <ListItemText primary='Logout'/>
                        </ListItemButton>  
                    </List>

                        {/* <HookedItemClass id={props.id} name = {props.name} />
                        <HookedItemClass id={2} name = "Home" />
                        <HookedItemClass id={3} name = "Invites"/>
                        <HookedItemClass id={4} name = "Friends"/>
                        <Divider />
                        <HookedItemClass id={5} name = "My Events"/>
                        <HookedItemClass id={6} name = "Create"/> */}
                    </Box>
            </Drawer>
        </Box>
    );
};

export default HookedSideBar;