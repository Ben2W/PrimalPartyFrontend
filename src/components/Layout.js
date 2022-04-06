import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HookedSideBar from './Sidebar/HookedSideBar'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Scale } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const useStyles = makeStyles({
    page: {
        paddingTop: 20,
        paddingLeft: 20
    },
    root: {
        display: 'flex'
    },
    back: {
        width: 60,
        height: 60
    }

})

export default function Layout() {
    const style = useStyles();
    return (
        <div className={style.root}>
            <HookedSideBar />
            <div className={style.page}>
                <IconButton component={Link} to='/dashboard'>
                    <ArrowCircleLeftOutlinedIcon fontSize="large" />
                </IconButton>
                <Outlet />
            </div>
        </div>
    )
}