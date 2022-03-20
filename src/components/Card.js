import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export default function BasicCard(props){

    const cardStyle={padding: 0, width:250, height:300, margin: "10px auto"}
    const btnStyle={margin:'8px 0', backgroundColor:"#3D4849"}
    const descStyle={margin:'30px 0', display:"flex"}
    
    return (
        <Card sx={cardStyle}>
            <div className="card_body">
                <CardContent>
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                          {props.title}
                        </Typography>

                        <Typography variant="p" component="div">
                          {props.date}
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="body" color="text.secondary" style={descStyle}>
                          {props.desc}
                        </Typography>
                    </div>
                  </CardContent>


                  <CardActions disableSpacing>
                        <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth >{props.button}</Button>
                  </CardActions>
            </div>
        </Card>
    )
}
