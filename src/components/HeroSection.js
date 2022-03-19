import React from 'react'
import { Paper } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Container, Grid, Typography } from '@mui/material'
import SignInOutContainer from '../containers'


const useStyles = makeStyles(() => ({
    section: {
      minheight: "60vh",
      backgroundImage: "url(/HomeBackground.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    content: {
      height: "100%"
    },
    container: {
      height: "100%"
    },
    h1: {
      color:"white",
      fontSize: 72,
      fontWeight: 700,
    },
    h5: {
      color:"white"
    }
}))

function HeroSection() {
    const styles = useStyles()
  return (
    <Paper className={styles.section}>
      <Container className={styles.container} maxWidth="lg">
        <Grid className={styles.content} container justifyContent="space-between" alignItems="center" >
          <Grid item sm={6}>
            <Typography variant="h2" className={styles.h1}>Welcome to the PrimalParty</Typography>
            <Typography variant="h5" className={styles.h5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta sit amet arcu et efficitur. </Typography>
          </Grid>
          <Grid item><SignInOutContainer/></Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default HeroSection