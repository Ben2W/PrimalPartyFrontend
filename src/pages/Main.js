import { Card, CardContent, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import HeroSection from '../components/HeroSection'
import { makeStyles } from '@material-ui/core'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'

const useStyles = makeStyles(() => ({
  content: {
    paddingTop: 10,
    paddingBottom: 75,
  },
  section: {
    boxShadow: 4,
    backgroundColor: '#17171A'
  }
}))

function Main() {
  const styles = useStyles()
  return (
    <div>
      <HeroSection />
      <div className={styles.section}>
        <Container className={styles.container} maxWidth="lg">
          <Typography  sx={{ paddingBottom: 2, paddingTop: 10, color: '#ffffff', fontSize: '26px' }}>
          Simple event managment to suit your needs
          </Typography>
          <Divider sx={{ backgroundColor: '#4A98FA', paddingBottom: '5px', marginBottom: 3, width: '26%'}}/>
          <Grid className={styles.content} container spacing={3} justifyContent="space-between" alignItems="center">
            <Grid item sm={4}>
              <Card sx={{ height: '330px', maxWidth: '100%', paddingLeft: 2, paddingTop: 1, backgroundColor: '#242528'}}>
                <CardContent>
                  <img src={icon1}></img>
                  <Typography gutterBottom variant='h5' sx={{ paddingTop: 2, color: '#ffffff'}}>
                    Sign Up For Free
                  </Typography>
                  <Typography sx={{ color: '#ffffff', fontSize: '17px'}}>
                    No commitments or contracts necessary. Just create your free account and join in on all of the fun! With a straightforward event managment company like us, it really is that simple.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card sx={{ height: '330px',maxWidth: '100%', paddingLeft: 2, paddingTop: 1, backgroundColor: '#242528' }}>
                <CardContent>
                  <img src={icon2}></img>
                  <Typography gutterBottom variant='h5' sx={{ paddingTop: 2, color: '#ffffff' }}>
                    Keep it organized
                  </Typography>
                  <Typography sx={{ color: '#ffffff', fontSize: '17px' }}>
                    Tired of people not knowing what to bring? Lucky for you we have a task managment system where you, the admin, can create and assign tasks so there is never any confusion.                  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card sx={{ height: '330px',maxWidth: '100%', paddingLeft: 2, paddingTop: 1, backgroundColor: '#242528' }}>
                <CardContent>
                  <img src={icon3}></img>
                  <Typography gutterBottom variant='h5' sx={{ paddingTop: 2, color: '#ffffff' }}>
                    The perfect Mix
                  </Typography>
                  <Typography sx={{ color: '#ffffff', fontSize: '17px' }}>
                    Our event managment software combines the usefulness of a standalone event managment software and the ease of use of a social media app through the use of our friends feature.                  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </div>
        
      
    </div>
  )
}

export default Main