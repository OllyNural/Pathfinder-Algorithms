import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingIcon from '@material-ui/icons/Settings';

import { StartButton,
  ClearGridButton,
  ClearSolutionButton
} from './ActionButtons';
import SettingsPanel from './settingsPanel';

// import StartButton from './startButton'
// import AlgorithmMenu from './algorithmMenu'
// import SpeedSlider from './speedSlider'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const MenuNavigation: React.FC = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const mainButtons = [
    {
      Button: StartButton,
      text: 'Start Algorithm'
    },
    {
      Button: ClearSolutionButton,
      text: 'Stop Algorithm'
    },
    {
      Button: ClearGridButton,
      text: 'Clear Grid'
    }
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pathy.io
            {/* <img src="https://s3.amazonaws.com/word-art/5e2ad4018eb33c71b4821df2.png" style={{ height: '100%' }} /> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainButtons.map(({ Button, text }, index) => (
            <Button text={text} />
          ))}
        </List>
        <Divider />
        { open ? <SettingsPanel /> : <IconButton onClick={handleDrawerOpen}><SettingIcon /></IconButton>}
      </Drawer>
    </div>
  );

  // return (
  //   <div className={classes.root}>
  //     <CssBaseline />
  //     <AppBar
  //       position="fixed"
  //       className={clsx(classes.appBar, {
  //         [classes.appBarShift]: open,
  //       })}
  //     >
        
  //     </AppBar>
  //     <Drawer
  //       className={classes.drawer}
  //       variant="persistent"
  //       anchor="right"
  //       open={open}
  //       classes={{
  //         paper: classes.drawerPaper,
  //       }}
  //     >
  //       <Toolbar>
  //         <Typography variant="h5" className={classes.title}>
  //           Pathfinder Algorithms
  //         </Typography>
  //         {/* <div className={classes.toolbar} > */}
  //           <StartButton />
  //           {/* <Switch /> */}
  //           <IconButton
  //             color="inherit"
  //             aria-label="open drawer"
  //             onClick={handleDrawerOpen}
  //             edge="end"
  //             className={clsx(classes.menuButton, open && classes.hide)}
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //         {/* </div> */}
  //       </Toolbar>
  //       <div className={classes.drawerHeader}>
  //         <IconButton onClick={handleDrawerClose}>
  //           {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  //         </IconButton>
  //       </div>
  //       <Divider />
  //       <AlgorithmMenu />
  //       <SpeedSlider />
  //     </Drawer>
  //   </div>
  // );
}

export default MenuNavigation

