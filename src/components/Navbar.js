import React from 'react';
import Link from "@material-ui/core/Link"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import CelebrationIcon from '@mui/icons-material/Celebration';

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

  return (
    <div>
      <AppBar color="default" sx={{backgroundColor: 'transparent', boxShadow: 0}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link button to="/" className={styles.SiteName} underline='none' color="textPrimary">
              <CelebrationIcon className={styles.CelebrationIcon} />PrimalParty 
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