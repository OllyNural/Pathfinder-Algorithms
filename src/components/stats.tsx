import React from 'react'
import { Theme, Paper, Typography, createStyles, makeStyles } from '@material-ui/core'

type StatsProps = {
    totalTime: number,
    numberOfNodes: number,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
            padding: '10px',
            textAlign: 'left',
            backgroundColor: '#CCCCCC',
            fontWeight: 700,
            position: 'absolute',
            bottom: 25,
            right: 25,
        },
    }),
);

const Stats: React.FC<StatsProps> = ({ totalTime, numberOfNodes }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={3}>
            <Typography> Total Time: {totalTime}ms</Typography>
            <Typography>Nodes Evaluated: {numberOfNodes}</Typography>
        </Paper>
    )
}

export default Stats
