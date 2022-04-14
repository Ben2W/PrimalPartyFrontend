import React from 'react'
import { Paper } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Container, Grid, Typography } from '@mui/material'
import SignInOutContainer from '../containers/SignInOutContainer'
import Navbar from './Navbar'


const useStyles = makeStyles(() => ({
    section: {
      minheight: "50vh",
      backgroundImage: "url(/HomeBackground.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",

    },
    content: {
      height: "100%",
      paddingTop: 30
    },
    container: {
      height: "100%"
    },
    h1: {
      color:"white",
      fontSize: [72, '!important'],
      fontWeight: [900, '!important'],
    },
    h5: {
      color:"white"
    }
}))

function HeroSection() {
    const styles = useStyles()
  return (
    <div>
      <Paper className={styles.section} square={true}>
        <Container className={styles.container} maxWidth="lg">
          
          <Grid className={styles.content} container justifyContent="space-between" alignItems="center" >
            <Grid item sm={7}>
              <h1>Welcome to the PrimalParty</h1>
              <Typography variant="h5" className={styles.h5}>Event planning and originization can be a nightmare without the proper tools at your disposal. PrimalParty is here to help.</Typography>
            </Grid>
            <Grid item><SignInOutContainer/></Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default HeroSection