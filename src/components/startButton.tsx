import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import AppContext from '../AppContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }),
);

const StartButton: React.FC = () => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    const { runAlgorithm }: { runAlgorithm: () => void } = state

    return (
        <div className={classes.root}>
            <Fab color="secondary" aria-label="start" variant="extended" onClick={runAlgorithm} >
                Start <PlayArrowIcon fontSize={'large'} />
            </Fab>
            <Fab aria-label="edit" variant="extended" onClick={() => dispatch({ status: 'reset' })} >
                Reset Walls <RotateLeftIcon fontSize={'large'} />
            </Fab>
        </div>
    );
}

export default StartButton