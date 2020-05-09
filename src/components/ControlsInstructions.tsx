import React, { useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { CSSTransition } from 'react-transition-group';

import AppContext from '../AppContext'
import { Paper, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                display: 'flex',
                justifyContent: 'center',
            },
        },
        orbitTouchSymbolPaper: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            webkitTransform: 'translateX(-50%) translateY(-50%)`',
            transform: 'translateX(-50%) translateY(-50%)',
            zIndex: 2,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            pointerEvents: 'none',
            fontFamily: ['Orbitron', 'sans-serif'].join(',')
        },
        orbitTouchSymbolIcon: {
            opacity: 0.6,
            fontSize: '98px',
            color: '#d1f7ff'
        },
        orbitZoomInSymbolIcon: {
            opacity: 0.6,
            fontSize: '98px',
            color: '#d1f7ff'
        },
        orbitZoomOutSymbolIcon: {
            opacity: 0.6,
            fontSize: '98px',
            color: '#d1f7ff'
        },
        orbitControlsHelperPaper: {
            opacity: 0.6,
            position: 'absolute',
            left: '50%',
            bottom: '5%',
            webkitTransform: 'translateX(-50%)`',
            transform: 'translateX(-50%)',
            zIndex: 2,
            pointerEvents: 'none',
            backgroundColor: '#6b6b6b',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: ['Orbitron', 'sans-serif'].join(','),
            fontWeight: 600,
            border: '3px solid #00FFFF',
            borderRadius: 0,
            padding: '10px'
        },
        orbitControlsHelperIcon: {
            opacity: 1,
            fontSize: '78px',
            color: '#00FFFF',
        }
    }),
);

export const OrbitInstructions: React.FC = () => {
    const classes = useStyles({});
    const [showTouchSymbol, setShowTouchSymbol] = useState(true)
    const [showControlsHelper, setShowControlsHelper] = useState(true)

    setTimeout(() => setShowTouchSymbol(false), 4000);
    // setTimeout(() => setShowControlsHelper(false), 5000);

    return (
        <>
            <Fade timeout={{enter: 0, exit: 500}} in={showTouchSymbol}>
                <Paper elevation={4} className={classes.orbitTouchSymbolPaper}>
                    <TouchAppIcon className={classes.orbitTouchSymbolIcon} />
                    <ZoomInIcon className={classes.orbitZoomInSymbolIcon} />
                    <ZoomOutIcon className={classes.orbitZoomOutSymbolIcon}/>
                </Paper>
            </Fade>
            <Fade timeout={{enter: 0, exit: 500}} in={showControlsHelper}>
                <Paper elevation={4} className={classes.orbitControlsHelperPaper}>
                    {/* <SpaceBarIcon className={classes.orbitControlsHelperIcon} /> */}
                    Press <b>Spacebar</b>
                    Enter First Person
                </Paper>
            </Fade>
        </>
    )
};

export const ClearGridButton: React.FC = () => {
    const classes = useStyles({});

    const { dispatch } = useContext<AppContext>(AppContext)

    return (
        <></>
    )
};
