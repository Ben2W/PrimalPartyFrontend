import { Card, CardContent, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import HeroSection from '../components/HeroSection'
import { makeStyles } from '@material-ui/core'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import Navbar from '../components/Navbar';

const useStyles = makeStyles(() => ({
  content: {
    paddingTop: 10,
    paddingBottom: 75,
  },
  content2: {

  },
  section: {
    boxShadow: 4,
    backgroundColor: '#17171A',
  },
  section2: {
    backgroundColor: '#242528',
    paddingTop: 50,
    paddingBottom: 100
  }
}))

function Main() {
  const styles = useStyles()
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className={styles.section}>
        <Container maxWidth="lg">
          <Typography sx={{ paddingBottom: 2, paddingTop: 10, color: '#ffffff', fontSize: '30px', fontWeight: 600 }}>
            Simple event managment to suit your needs
          </Typography>
          <Divider sx={{ backgroundColor: '#4A98FA', paddingBottom: '4px', marginBottom: 3, width: '26%' }} />
          <Grid className={styles.content} container spacing={3} justifyContent="space-between" alignItems="center">
            <Grid item sm={4}>
              <Card elevation={5} style={{ backgroundColor: '#242528'}} sx={{ height: '340px', maxWidth: '100%', paddingLeft: 2, paddingTop: 1, paddingRight: 2 }}>
                <CardContent>
                  <img src={icon1}></img>
                  <Typography gutterBottom variant='h5' sx={{ paddingTop: 2, color: '#ffffff' }}>
                    Sign Up For Free
                  </Typography>
                  <Divider sx={{ backgroundColor: '#4A98FA', paddingBottom: '1px', marginBottom: 2, width: '50%' }} />
                  <Typography sx={{ color: '#ffffff', fontSize: '17px' }}>
                    No commitments or contracts necessary. Just create your free account and join in on all of the fun! With a straightforward event managment company like us, it really is that simple.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card elevation={5} style={{ backgroundColor: '#242528' }} sx={{ height: '340px', maxWidth: '100%', paddingLeft: 2, paddingTop: 1, paddingRight: 2}}>
                <CardContent>
                  <img src={icon2}></img>
                  <Typography gutterBottom variant='h5' sx={{ paddingTop: 4, color: '#ffffff' }}>
                    Keep It Organized
                  </Typography>
                  <Divider sx={{ backgroundColor: '#4A98FA', paddingBottom: '1px', marginBottom: 2, width: '50%' }} />

                  <Typography sx={{ color: '#ffffff', fontSize: '17px' }}>
                    Tired of people not knowing what to bring? Lucky for you we have a task managment system where you, the admin, can create and assign tasks so there is never any confusion.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card elevation={5} style={{ backgroundColor: '#242528' }} sx={{ height: '340px', maxWidth: '100%', paddingLeft: 2, paddingTop: 1, paddingRight: 2}}>
                <CardContent>
                  <img src={icon3}></img>
                  <Typography gutterBottom variant='h5' sx={{ paddingTop: 2, color: '#ffffff' }}>
                    The Perfect Mix
                  </Typography>
                  <Divider sx={{ backgroundColor: '#4A98FA', paddingBottom: '1px', marginBottom: 2, width: '50%' }} />

                  <Typography sx={{ color: '#ffffff', fontSize: '17px' }}>
                    Our event managment software combines the usefulness of a standalone event managment software and the ease of use of a social media app through the use of our friends feature.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </div>



      <div className={styles.section2}>
        <Container maxWidth="lg">
          <Grid className={styles.content2} container justifyContent="space-between" alignItems="center">
            <Grid item sm={5}>
              <div>
                <Typography variant='h5' sx={{ paddingBottom: 2, paddingTop: 10, color: '#ffffff', fontSize: '30px', fontWeight: '600' }}>
                  The easiest way to get the party started
                </Typography>
                <Typography sx={{ color: '#ffffff', fontSize: '17px' }}>
                  Managing tasks and guests is arguably the most stresful part of the event planning process.
                  PrimalParty gives you the ability to easily create and event, add guests, and assign tasks in a simple to use managment software.
                  With our tools, you are the only thing limiting the success of your event or party.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={6} sx={{ marginTop: 8 }}>
              <Card elevation={12} style={{ backgroundColor: '#242528' }} sx={{ maxWidth: '100%', paddingLeft: 2, paddingTop: 3, paddingRight: 2 }}>
                <Typography sx={{ color: '#ffffff', fontSize: '19px', paddingBottom: 3, display: 'inline-flex', alignItems: 'center' }}>
                  <CheckBoxIcon fontSize="large" sx={{ paddingRight: 2 }} />
                  Easy to use dashboard that anyone can understand
                </Typography>
                <Typography sx={{ color: '#ffffff', fontSize: '19px', paddingBottom: 3, display: 'inline-flex', alignItems: 'center' }}>
                  <CheckBoxIcon fontSize="large" sx={{ paddingRight: 2 }} />
                  View upcoming events that you were invited to
                </Typography>
                <Typography sx={{ color: '#ffffff', fontSize: '19px', paddingBottom: 3, display: 'inline-flex', alignItems: 'center' }}>
                  <CheckBoxIcon fontSize="large" sx={{ paddingRight: 2 }} />
                  Add friends to quickly invite them to your next event
                </Typography>
                <Typography sx={{ color: '#ffffff', fontSize: '19px', paddingBottom: 3, display: 'inline-flex', alignItems: 'center' }}>
                  <CheckBoxIcon fontSize="large" sx={{ paddingRight: 2 }} />
                  Easily manage guests and assign tasks
                </Typography>
                <Typography sx={{ color: '#ffffff', fontSize: '19px', paddingBottom: 3, display: 'inline-flex', alignItems: 'center' }}>
                  <CheckBoxIcon fontSize="large" sx={{ paddingRight: 2 }} />
                  Plans change? Don't worry you can always edit the event
                </Typography>

              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>


    </div>
  )
}

export default Main