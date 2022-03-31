import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import defaultLogo from "./defaultLogo.png"
import {Paper} from "@mui/material";
import {useNavigate, Link} from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import ShowEvents from "./ShowEvents"

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
        .then(() => {
          navigate('/');
        })
    }

    return (
        <div>
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
                            <Typography variant="h5" align = "center" component={'span'}>
                                <div
                                    style={{ marginTop: '15px', cursor:"pointer", fontSize: '23px', fontWeight: 600}}
                                    onClick={handleClick}
                                >
                                    &nbsp;&nbsp;&nbsp;PrimalParty</div>
                            </Typography>
                    </Paper>
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
                            <ShowEvents/>
                        </List>

                        <List>
                            <ListItem button component={Link} to='/createparty'>
                                <ListItemIcon>
                                    {IconHelper(6)}
                                </ListItemIcon>
                                <ListItemText primary='Create'/>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button
                                onClick={handleSubmit}
                            >
                                <ListItemIcon>
                                    {IconHelper(7)}
                                </ListItemIcon>
                                <ListItemText primary='Logout'/>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </div>
    );
};

export default HookedSideBar;