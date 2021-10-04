import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    AppBar: {
        boxShadow: 'none'
    },
    grow: {
        flexGrow: 1
    }
  }))

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
           <AppBar color='inherit' className={classes.AppBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                    </IconButton>
                    <div className={classes.grow}/>
                    <Button 
                        startIcon= {<AccountCircle/>}
                        variant="outlined" 
                        color="secondary">
                            Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home
