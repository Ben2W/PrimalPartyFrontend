import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Paper } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconHelper from "./IconHelper";
import ListItemText from "@mui/material/ListItemText";
import ShowEvents from "./ShowEvents"
import Logo from '../../img/PartyHatDinoLogo-white.png';

import useAuth from '../../hooks/useAuth';
import { UserContext } from '../../context/UserContext';

const useStyles = makeStyles((theme) => ({
    logo: {
        maxHeight: 70,
        paddingRight: 15
    },
    SiteName: {
        marginRight: "auto",
        fontSize: 26,
        fontWeight: 600,
        alignItems: 'center',
        color: '#17171A',
        display: 'flex',
        alignItems: 'center'
    },
    root: {
        backgroundColor: '#17171A'
    }
}))

const drawerWidth = 240;

const HookedSideBar = () => {
    const { setAuth } = useAuth();
    const { user, setUser } = React.useContext(UserContext);

    const navigate = useNavigate();
    const styles = useStyles();

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
                setUser({})
                localStorage.clear();
                navigate('/');
            })
    }

    return (
        <div className={styles.root}>
            <Box sx={{ display: 'flex' }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#242528' },
                    }}
                >
                    <Paper square={true} elevation={0} sx={{ width: "drawerWidth", display: "flex", padding: "5px", backgroundColor: '#242528' }}>
                        <img src={Logo} className={styles.logo} alt="PrimalJetLogo" width="25%" />
                        <Typography className={styles.SiteName} variant="h5" align="center" component={'span'}>
                            <div
                                style={{ marginTop: '15px', cursor: "pointer", fontSize: '23px', fontWeight: 600, color: '#ffffff' }}
                                onClick={handleClick}
                            >
                                PrimalParty</div>
                        </Typography>
                    </Paper>
                    <Box sx={{ overflow: 'auto', marginLeft: 1, color: '#ffffff' }}>
                        <List>
                            <ListItem button component={Link} to='/account'>
                                <ListItemIcon sx={{ color: '#ffffff'}}>
                                    {IconHelper(1)}
                                </ListItemIcon>
                                <ListItemText primary={user.firstName + " " + user.lastName} />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button component={Link} to='/dashboard'>
                                <ListItemIcon sx={{ color: '#ffffff' }}>
                                    {IconHelper(2)}
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button component={Link} to="/friends">
                                <ListItemIcon sx={{ color: '#ffffff' }}>
                                    {IconHelper(4)}
                                </ListItemIcon>
                                <ListItemText primary='Friends' />
                            </ListItem>
                        </List>

                        <List>
                            <ShowEvents />
                        </List>

                        <List>
                            <ListItem button component={Link} to='/createparty'>
                                <ListItemIcon sx={{ color: '#ffffff' }}>
                                    {IconHelper(6)}
                                </ListItemIcon>
                                <ListItemText primary='Create' />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button
                                onClick={handleSubmit}
                            >
                                <ListItemIcon sx={{ color: '#ffffff' }}>
                                    {IconHelper(7)}
                                </ListItemIcon>
                                <ListItemText primary='Logout' />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </div>
    );
};

export default HookedSideBar;