import { Typography, Grid, Button } from '@mui/material';
import React from 'react'
import { UserContext } from './../context/UserContext'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  field: {
    margin: '5px 0 5px'
  },
  error: {
    fontSize: 14,
    color: '#FF0000',
    margin: '15px 0'
  },
  page: {
    width: '100%'
  }
}))

function Account() {
  let navigate = useNavigate();
  const styles = useStyles()
  const { user } = React.useContext(UserContext);
  return (
    <div className={styles.page}>
      <Typography variant='h3'>Welcome, {user.firstName}</Typography>
      <Typography variant='h4' sx={{ marginTop: 3 }}>Your Profile</Typography>
      <Grid container>
        <Grid item xs={1}>
          <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold' }}>Name: </Typography>
          <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold' }}>User: </Typography>
          <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold' }}>Email: </Typography>
          <Typography variant='h5' sx={{ marginTop: 3, fontWeight: 'bold' }}>Phone: </Typography>

        </Grid>
        <Grid item xs={2}>
          <Typography variant='h5' sx={{ marginTop: 3 }}>{user.firstName} {user.lastName}</Typography>
          <Typography variant='h5' sx={{ marginTop: 3 }}>{user.username}</Typography>
          <Typography variant='h5' sx={{ marginTop: 3 }}>{user.email}</Typography>
          <Typography variant='h5' sx={{ marginTop: 3 }}>{user.phone}</Typography>

        </Grid>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          <Grid item xs={3}>
            <Button
              sx={{ boxShadow: 3 }}
              xs={3}
              type='submit'
              size='large'
              variant='contained'
              onClick={() => navigate('/editaccount')}
              fullWidth
            >
              Edit Information
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              sx={{ boxShadow: 3 }}
              xs={3}
              type='submit'
              size='large'
              variant='contained'
              fullWidth
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </div >
  );
}

export default Account