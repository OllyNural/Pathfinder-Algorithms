import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import AppContext from '../AppContext'
import { ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
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

    const { runAlgorithm }: { runAlgorithm: () => void } = state

    return (
        <ListItem button key={text} onClick={runAlgorithm}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={runAlgorithm}
                edge="start"
            >
                <PlayArrowIcon fontSize={'large'} className={classes.startButton} />
            </IconButton>
            <Typography className={classes.menuPadding}>{text}</Typography>
        </ListItem>
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
                <StopIcon fontSize={'large'} className={classes.stopButton} />
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
                <DeleteIcon fontSize={'large'} className={classes.deleteButton} />
            </IconButton>
            <Typography className={classes.menuPadding}>{text}</Typography>
        </ListItem>
    )
};
