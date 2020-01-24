import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';

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



export const StartButton: React.FC = () => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    const { runAlgorithm }: { runAlgorithm: () => void } = state

   return (<IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={runAlgorithm} 
    edge="start"
    >
    <PlayArrowIcon />
</IconButton>)
};

export const ClearGridButton: React.FC = () => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    const { runAlgorithm }: { runAlgorithm: () => void } = state

   return (<IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={() => dispatch({ status: 'clear-all' })}
    edge="start"
    >
    <RotateLeftIcon />
</IconButton>)
};

export const ClearSolutionButton: React.FC = () => {
    const classes = useStyles({});

    const { state, dispatch } = useContext<AppContext>(AppContext)

    const { runAlgorithm }: { runAlgorithm: () => void } = state

   return (<IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={() => dispatch({ status: 'clear-solution' })}
    edge="start"
    >
    <RotateLeftIcon />
</IconButton>)
};

// const AllButtons: React.FC = () => {


//     return (
//         <div className={classes.root}>
//             <Fab color="secondary" aria-label="start" variant="extended" onClick={runAlgorithm} >
//                 Start <PlayArrowIcon fontSize={'large'} />
//             </Fab>
//             <Fab aria-label="edit" variant="extended" onClick={() => dispatch({ status: 'clear-all' })} >
//                 Clear Grid <RotateLeftIcon fontSize={'large'} />
//             </Fab>
//             <Fab aria-label="edit" variant="extended" onClick={() => dispatch({ status: 'clear-solution' })} >
//                 Clear Solution <RotateLeftIcon fontSize={'large'} />
//             </Fab>
//         </div>
//     );
// }

// export  as StartButton;

// export  as ClearGridButton;

// export  as ClearSolutionButton;