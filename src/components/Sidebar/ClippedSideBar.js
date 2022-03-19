import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import ListItemHelper from "./ListItemHelper"
import PrimalJetLogo from "./resizedLogo.png"
import ListItemClass from "./ListItemClass"

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <img src={PrimalJetLogo} alt="PrimalJetLogo"/>
            PrimalParty
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <ListItemClass id={1} />
            <ListItemClass id={2} />
            <ListItemClass id={3} />
            <ListItemClass id={4} />
            <Divider />
            <ListItemClass id={5} />
            <ListItemClass id={6} />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
            Chocolate Rain!
        </Typography>
      </Box>
    </Box>
  );
}
