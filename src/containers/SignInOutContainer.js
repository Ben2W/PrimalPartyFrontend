import React, { useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../components/Login'
import Signup from '../components/Signup';

const SignInOutContainer=()=>{
    const [value,setvalue]=useState(0)
    const handleChange = (event, newValue) => {
        setvalue(newValue);
    };
    const paperStyle={width: 320, marginTop: 100, marginBottom: 100}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    return (
      <div>
        <Paper style={paperStyle} elevation={10}>
          <Tabs
                value={value}
                indicatorColor="primary"
                textColor='primary'
                onChange={handleChange}
            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0} >
                <Login handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <Signup handleChange={handleChange} />
            </TabPanel>
        </Paper>
      </div>
    );
}

export default SignInOutContainer;