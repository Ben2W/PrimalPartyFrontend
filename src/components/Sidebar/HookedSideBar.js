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
import HookedItemClass from "./HookedItemClass"
import defaultLogo from "./defaultLogo.png"
import {Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

const HookedSideBar = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
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
                <Paper variant="outlined" sx={{width: drawerWidth, display: "flex", }}>
                    <img src={defaultLogo} alt="PrimalJetLogo" width="25%" />
                        <Typography variant="h5" align = "center">
                            <div
                                style={{ marginTop: '15px', cursor:"pointer", }}
                                onClick={handleClick}
                            >
                                &nbsp;&nbsp;&nbsp;PrimalParty</div>
                        </Typography>
                </Paper>
                {/*<Toolbar /> We can replace this with a function to close the sidebar, for now it's a permanent sidebar*/}
                    <Box sx={{ overflow: 'auto' }}>
                        <HookedItemClass id={props.id} name = {props.name} />
                        <HookedItemClass id={2} name = "Home" />
                        <HookedItemClass id={3} name = "Invites"/>
                        <HookedItemClass id={4} name = "Friends"/>
                        <Divider />
                        <HookedItemClass id={5} name = "My Events"/>
                        <HookedItemClass id={6} name = "Create"/>
                    </Box>
            </Drawer>
        </Box>
    );
};

export default HookedSideBar;