import React from 'react';
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link, Container } from '@material-ui/core'
import SideBar from '../components/SideBar';
import Card from '../components/Card.js';


function Dashboard() {
  return (
    <div className="Dashboard">
    

      <Container>
        <Grid container spacing={3}>

          <Grid item>
            <Card
            title="Pizza Party" 
            date="March 18, 2022" 
            button="View More" 
            desc="This is a pizza party."
            />
          </Grid>

          <Grid item>
            <Card
            title="Pool Party" 
            date="March 18, 2022"  
            button="View More" 
            desc="This is a pool party. Bruh bruh bruh bruh."
            />
          </Grid>

          <Grid item>
            <Card
            title="Pool Party" 
            date="March 18, 2022"  
            button="View More" 
            desc="This is a pool party. Bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh."
            />
          </Grid>

          <Grid item>
            <Card
            title="Pool Party" 
            date="March 18, 2022"  
            button="View More" 
            desc="This is a pool party. Bruh bruh bruh bruh."
            />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;