import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopIcon from '@material-ui/icons/Stop';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import AppContext from '../AppContext'
import { ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                display: 'flex',
                justifyContent: 'center'
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
        startButton: {
            color: '#28A228'
        },
        stopButton: {
            color: '#D60B00'
        },
        deleteButton: {
            color: 'rgba(0, 0, 0, 0.87)'
        },
        menuPadding: {
            paddingLeft: theme.spacing(3),
        }
    }),
);

type ButtonProps = {
    text: string,
}

export const StartButton: React.FC<ButtonProps> = ({ text }) => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    // const { runAlgorithm, currentAlgorithm }: { runAlgorithm: () => void, currentAlgorithm: (grid: number[][]) => any } = state

    return (
        <ListItem 
            button 
            key={text} 
            onClick={() => dispatch({ status: 'start-algorithm' })} 
            className={classes.root}
        >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => dispatch({ status: 'start-algorithm' })}
                edge="start"
            >
                <PlayArrowIcon className={classes.startButton} />
            </IconButton>
            <Typography className={classes.menuPadding}>{text}</Typography>
        </ListItem >
    )
};

export const ClearSolutionButton: React.FC<ButtonProps> = ({ text }) => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    return (
        <ListItem button key={text} onClick={() => dispatch({ status: 'clear-solution' })}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => dispatch({ status: 'clear-solution' })}
                edge="start"
            >
                <StopIcon className={classes.stopButton} />
            </IconButton>
            <Typography className={classes.menuPadding}>{text}</Typography>
        </ListItem>
    )
};

export const ClearGridButton: React.FC<ButtonProps> = ({ text }) => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    return (
        <ListItem button key={text} onClick={() => dispatch({ status: 'clear-all' })} >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => dispatch({ status: 'clear-all' })}
                edge="start"
            >
                <DeleteIcon className={classes.deleteButton} />
            </IconButton>
            <Typography className={classes.menuPadding}>{text}</Typography>
        </ListItem>
    )
};
