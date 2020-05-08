import React, { useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Rotate90DegreesCcwIcon from '@material-ui/icons/Rotate90DegreesCcw';
import TouchAppIcon from '@material-ui/icons/TouchApp';
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
        orbitInstructionsPaper: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            webkitTransform: 'translateX(-50%) translateY(-50%)`',
            transform: 'translateX(-50%) translateY(-50%)',
            zIndex: 2,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            pointerEvents: 'none'
        },
        orbitInstructionsIcon: {
            opacity: 0.6,
            fontSize: '98px',
            color: '#d1f7ff'
        }
    }),
);

export const OrbitInstructions: React.FC = () => {
    const classes = useStyles({});
    const [show, setShow] = useState(true)

    setTimeout(() => setShow(false), 2000);

    return (
        <Fade timeout={{enter: 0, exit: 500}} in={show}>
            <Paper elevation={4} className={classes.orbitInstructionsPaper}>
                <TouchAppIcon className={classes.orbitInstructionsIcon} />
            </Paper>
        </Fade>
    )
};

export const ClearGridButton: React.FC = () => {
    const classes = useStyles({});

    const { dispatch } = useContext<AppContext>(AppContext)

    return (
        <></>
    )
};
