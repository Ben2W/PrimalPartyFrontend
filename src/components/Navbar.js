import React, { useState } from 'react';
import Link from "@material-ui/core/Link"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../img/PartyHatDinoLogo.png';
import Logo2 from '../img/PartyHatDinoLogo-white.png';
import '../Navbar.css'

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
  },
  link2: {
    marginRight: 20,
    fontSize: 17,
    fontWeight: 600,
    color: '#ffffff'
  },
  SiteName2: {
    marginRight: "auto",
    fontSize: 26,
    fontWeight: 600,
    alignItems: 'center',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center'
  },
  logo2: {
    maxHeight: 70,
    paddingRight: 15,
    color: '#ffffff'
  }
}))

function Navbar() {
  const styles = useStyles();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      {navbar
        ?
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link button to="/" className={styles.SiteName2} underline='none' >
              <img src={Logo2} className={styles.logo2} /> PrimalParty
            </Link>

            <Link
              className={styles.link2}
              color="textPrimary"
              variant="button"
              underline="none"
              href="/about"
            >
              About
            </Link>
          </Toolbar>
        </Container>
        :
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link button to="/" className={styles.SiteName} underline='none' >
              <img src={Logo} className={styles.logo} /> PrimalParty
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
      }
    </div>
  );
}

export default Navbar