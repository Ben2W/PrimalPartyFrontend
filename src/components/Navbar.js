import React from 'react';
import Link from "@material-ui/core/Link"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../img/PartyHatDinoLogo.png';

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    fontSize: 17,
    fontWeight: 600
  },
  CelebrationIcon: {
    marginRight: 5,
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
  logo: {
    maxHeight: 70,
    paddingRight: 15
  }
}))

function Navbar() {
  const styles = useStyles();

  return (
    <div>
      <AppBar color="default" sx={{backgroundColor: 'transparent', boxShadow: 0, paddingTop: 1}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link button to="/" className={styles.SiteName} underline='none' >
              <img src={ Logo } className={styles.logo} /> PrimalParty 
            </Link>
            <Link 
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="none" 
              href="/about"
              >
                About
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar