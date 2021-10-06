import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import {List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
        color: '#fff'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    icons: {
        marginTop: -2.3,
        paddingRight: theme.spacing(1)
    },
    menuIcon: {
        paddingLeft: '10px',
    },
    grow: {
        flexGrow: 1
    },
    logo: {
        height: 31,
        marginTop: -2.3,
        paddingLeft:24
   
    },
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    ListItemText: {
        fontSize: 14
    },
    ListItem: {
        paddingTop: 4,
        paddingBottom: 4,
        
    }
  }));

  const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];
  
function Home( { darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
           <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuIcon} 
                        color="inherit" 
                        aria-label="menu"
                    >
                    <MenuIcon/>
                    <img src={
                        theme.palette.type === 'dark' 
                        ? '/images/branco.png'
                        : '/images/preto.png'} 
                        alt='Logo'
                        className={classes.logo}
                    />
                    </IconButton>
                    <div className={classes.grow}/>
                    <Switch 
                        value={darkMode} 
                        onChange={() => setDarkMode(!darkMode)}
                        className={classes.icons} 
                    />
                    <IconButton 
                        className={classes.icons}  
                    >
                    <VideoCallIcon/>
                    </IconButton> <IconButton 
                        className={classes.icons}   
                    >
                    <MoreVert/>
                    </IconButton> <IconButton 
                        className={classes.icons}  
                    >
                    <Apps/>
                    </IconButton>
                    <Button 
                        startIcon= {<AccountCircle/>}
                        variant="outlined" 
                        color="secondary">
                            Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
           <Box display='flex'>
               <Hidden mdDown>
                  <Drawer
                    variant="permanent"
                    className={classes.drawer}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                <List>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Inicio'} />
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<ExploreIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Explorar'} />
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<Subscriptions/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Inscrições'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<VideoLibraryOutlinedIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Biblioteca'} />
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<RestoreOutlinedIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Histórico'} />
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<Subscriptions/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Inscrições'} />
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<QueryBuilderOutlinedIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Assistir mais tarde'} />
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<ThumbUpAltOutlinedIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Videos marcados co..'}/>
                    </ListItem>
                    <ListItem button classes={classes.ListItem}>
                        <ListItemIcon>{<KeyboardArrowDownOutlinedIcon/>}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.ListItemText,
                        }} primary={'Mostrar Mais'}/>
                    </ListItem>
                </List>
                <Divider />
                <Box p={4}>
                    <Typography variant="body2">
                        Faça o login para curtir videos, comentar e se inscrever.
                    </Typography>
                    <Box mt={2}>
                        <Button
                            variant="outlined"
                            color='secondary'
                            startIcon={<AccountCircle/>}
                        >
                            Fazer Login
                        </Button>
                    </Box>
                </Box>
            </div>
            </Drawer>
               </Hidden>
                <Box p={8}>  
            <Toolbar/>
                <Typography
                    variant="h5"
                    color='textPrimary'
                    style={{ fontWeight: 800 }}
                >
                    Recomendados
                </Typography>
                <Grid container spacing={2}>
                    {
                        videos.map((item,index) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                              <Box>
                                <img
                                    style={{ width: '100%'}}
                                    alt={item.title}
                                    src={item.thumb}
                                />
                                <Box>
                                    <Typography
                                        style={{ fontWeight: 600 }}
                                        gutterBottom
                                        variant='body1'
                                        color='textPirmary'
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        display='block'
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {item.channel}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {`${item.views}  ${item.date}`}
                                    </Typography>
                                </Box>
                              </Box>
                            </Grid>    
                        ))
                    } 
                </Grid>
            </Box>
           </Box>
        </div>
    )
}

export default Home
