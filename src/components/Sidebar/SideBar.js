import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ChooseIcon from "../ChooseIcon"
import CakeIcon from '@mui/icons-material/Cake';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';

const drawerWidth = 240;

export default function SideBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        PrimalParty
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Aldrich', 'Home', 'Invites', 'Friends'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {/*{index % 2 === 0 ? <PersonIcon /> : <MailIcon />*/}
                                {/*}*/}
                                {
                                    ChooseIcon(index)
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['My Events'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {<CakeIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    <div>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    {<PregnantWomanIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={"Ben's Mom"}/>
                            </ListItem>
                        </List>
                    </div>
                </List>
            </Drawer>
        </Box>
    );
}
