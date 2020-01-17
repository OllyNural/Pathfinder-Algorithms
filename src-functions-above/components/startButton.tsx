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

    const { runAlgorithm, setStatus}: { runAlgorithm: () => void, setStatus: (status: string) => void } = useContext<AppContext>(AppContext);

    return (
        <div className={classes.root}>
            <Fab color="secondary" aria-label="start" variant="extended" onClick={runAlgorithm} >
                Start <PlayArrowIcon fontSize={'large'} />
            </Fab>
            <Fab aria-label="edit" variant="extended">
                Reset Walls <RotateLeftIcon fontSize={'large'} onClick={() => setStatus('reset')} />
            </Fab>
        </div>
    );
}

export default StartButton