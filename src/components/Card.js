import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export default function BasicCard(props){

    const cardStyle={padding: 0, width:250, height:275, margin: "10px auto", display:'grid'}
    const btnStyle={backgroundColor:"#3D4849"}
    const descStyle={padding:'30px 0', fontWeight:600}
    
    return (
        <Card style={cardStyle}>
            <CardContent>
                <div className="wrapper">
                    <Typography variant="h5">
                      {props.title}
                    </Typography>

                    <Typography variant="subtitle2">
                      {props.date}
                    </Typography>
                </div>

                <Typography variant="body2" color="text.primary" style={descStyle}>
                  {props.desc}
                </Typography>
              </CardContent>


              <CardActions>
                    <Button type='submit' color='primary' variant='contained' style={btnStyle}fullWidth >{props.button}</Button>
              </CardActions>
        </Card>
    )
}
