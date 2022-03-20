import React from 'react';
import Link from "@material-ui/core/Link"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import CelebrationIcon from '@mui/icons-material/Celebration';
import {useNavigate} from "react-router-dom";

const navigationLinks = [
  {name: "About", href: "../about"},
  {name: "Dashboard", href: "../dashboard"},
  {name: "Account", href: "../account"},
  {name: "Create Party", href: "../createparty"},
  {name: "Forgot Password", href: "../forgotpassword"},
  {name: "Friends", href: "../friends"},
  {name: "Invites", href: "../invites"}
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    fontSize: 17,
  },
  CelebrationIcon: {
    marginRight: 5,
  },
  SiteName: {
    marginRight: "auto",
    fontSize: 23,
    fontWeight: 600
  }
}))

function Navbar() {
  const styles = useStyles();
  const navigate = useNavigate();
  const handleClick = (link) => {
    return navigate({link});
  }
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/" className={styles.SiteName} underline='none' color="textPrimary">
            <CelebrationIcon className={styles.CelebrationIcon} />PrimalParty 
          </Link>
          {navigationLinks.map((item) => (
          <Link 
            className={styles.link}
            color="textPrimary"
            variant="button"
            underline="none" 
            href={item.href}
            onClick={handleClick(item.href)}
            >
              {item.name}
          </Link>
        ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar