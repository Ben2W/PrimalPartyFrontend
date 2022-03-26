import React from 'react'
import { Grid, Paper,Button, Typography } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Image from '../img/purple-grad.png'; // Import using relative path

export default function BasicCard(props){

    const cardStyle={marginTop: 20, width:250, height: 275, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', backgroundImage: `url(${Image})`}
    const btnStyle={backgroundColor:"#000000"}
    const descStyle={padding:'30px 0 0 0', color:'#F5F5F5'}
    const paperStyle={display: 'flex', flexWrap: 'nowrap', maxWidth: 250, maxHeight: 275, }
    
    return (
        <Paper style={paperStyle}>
            <Grid containter alignItems="stretch">
                <Card style={cardStyle}>
                    <Grid>
                        <CardContent>
                            <div className="wrapper">
                                <Typography variant="h5" style={{color:'#F5F5F5'}}>
                                  {props.props.name}
                                </Typography>

                                <Typography variant="subtitle2" style={{color:'#F5F5F5'}}>
                                  Date: {props.props.date}
                                </Typography>

                                <Typography variant="subtitle2" style={{color:'#F5F5F5'}}>
                                  Address: {props.props.address}
                                </Typography>
                            </div>

                            <Typography variant="body2" color="text.light" style={descStyle}>
                              {props.props.description}
                            </Typography>

                          </CardContent>
                      </Grid>

                      <Grid>
                          <CardActions>
                                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth >View More</Button>
                          </CardActions>
                      </Grid>
                </Card>
            </Grid>
        </Paper>
    )
}
