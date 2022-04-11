import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const useStyles = makeStyles(() => ({
  paper: {
      padding: 20, 
      minheight: '32vh', 
      width:280, 
      margin: "10px auto",
      fontSize: 20,

  },
  avatar: {
      backgroundColor:'black',
  },
  button: {
      margin:'8px 0', 
      backgroundColor: '#17171A', 
      color: '#ffffff', 
      fontSize: 14, 
      fontWeight: 600,
      '&:hover': {
          backgroundColor: '#fff',
          color: '#17171A'
      }
  },
  error : {
      fontSize: 14,
      color: '#FF0000',
      margin: '15px 0'
  }
}))

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();
  const styles = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault();

    const details = {
        'email': email
    };

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(process.env.REACT_APP_URL + '/forgot', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        credentials: 'include',
        body: formBody,
    })
    .then(response => {
        switch(response.status) {
          case 200:
              navigate('/resetpassword', { replace : true});
              break;
          case 403:
              setErrorMessage('Cannot reset password while logged in.')
              break;
          case 404:
              setErrorMessage('Email not associated with account.');
              break;
          case 409:
            setErrorMessage('Please wait longer than 15 seconds to reset password.');
            break;
          case 412:
            setErrorMessage('Invalid email syntax.');
            break;
          case 500:
            setErrorMessage('Unexpected error.');
            break;
          case 503:
            setErrorMessage('Email service unavailable');
            break;
      }
    })
  }

  return (
    <div>
      <Grid>
          <Paper className={styles.paper}>
              <Grid align="center" >
                  <Avatar className={styles.avatar}><QuestionMarkIcon/></Avatar>
                  <h2>Forgot Password?</h2> 
              </Grid>
              {errorMessage && (
                      <p className={styles.error}> {errorMessage} </p>
                  )}
              <form onSubmit={handleSubmit}>
                  <TextField
                      component={'span'}  
                      type="text"
                      required
                      fullWidth
                      label="Enter Email"
                      value={email}    
                      onChange={(e) => setEmail(e.target.value)}            
                  />
                  <Button
                      type='submit'
                      variant='contained'
                      className={styles.button}
                      fullWidth
                  >
                      Send Email
                  </Button>
              </form>
          </Paper>
      </Grid>
    </div>
  );
}

export default ForgotPassword;