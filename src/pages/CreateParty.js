import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateParty() {
  const paperStyle={padding: 20, minheight: '32vh', width:280, margin: "10px auto"}
  const btnstyle={margin:'8px 0'}



  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  // const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();



    const details = {
      'name': title,
      'description': description,
      'address': address,
      'date': date,
    }

    var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(process.env.REACT_APP_URL + '/events' ,{
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          },
          credentials: 'include',
          body: formBody
        })
        .then(response => {
          console.log(response.status)
          if(!response.ok) {
            throw Error('could not fetch the data for that resource')
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          navigate('/dashboard');
        })
        .catch(err => {
          console.log(err.message);
      })
  }


  return (
    <Grid>
      <Paper style={paperStyle}>
        <form onSubmit={handleSubmit}>
        <TextField 
           type="text"
           required
           fullWidth
           label="Title"
           value={title}    
           onChange={(e) => setTitle(e.target.value)}                  
        />
        <TextField 
           type="text"
           required
           fullWidth
           label="Description"
           value={description}    
           onChange={(e) => setDescription(e.target.value)}                  
        />
        <TextField 
           type="text"
           required
           fullWidth
           label="Data"
           value={date}    
           onChange={(e) => setDate(e.target.value)}                  
        />
        <TextField 
           type="text"
           required
           fullWidth
           label="Address"
           value={address}    
           onChange={(e) => setAddress(e.target.value)}                  
        />

        <Button 
          type='submit'
          color='primary'
          variant='contained'
          style={btnstyle}
          fullWidth
        >
          Create Party
        </Button>
      </form>
      </Paper>
      
    </Grid>
  )
}

export default CreateParty