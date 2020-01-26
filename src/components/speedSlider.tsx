/// <reference path="../types/normalised.d.ts" />

import React, { useContext, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Box, Typography } from '@material-ui/core';
import AppContext from '../AppContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import IconButton from '@material-ui/core/IconButton';

const useSwitchStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left'
        },
        slideContainer: {
            textAlign: 'center',
        },
        slider: {
            width: '90%',
        },
        milliseconds: {
            fontSize: '16px',
            textAlign: 'center',
            lineHeight: '32px',
        },
        buttonContainer: {
            fontSize: '16px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '-10px'
        },
        addRemoveButtons: {
            padding: '6px',
            height: '32px'
        }
    }));

const SpeedSlider: React.FC = () => {

    const min = 25
    const max = 2000
    const steps = 25

    const { state, dispatch } = useContext<AppContext>(AppContext)
    const { renderSpeed }: { renderSpeed: number } = state
    const [value, setValue] = useState(renderSpeed)

    const classes = useSwitchStyles({})

    const handleChange = (value: number | number[]) => {
        if (typeof value === 'number') setValue(value)
    }

    const handleChangeCommitted = (value: number | number[]) => {
        if (typeof value === 'number') {
            setValue(value)
            dispatch({ renderSpeed: value })
        }
    }

    return (
        <Box className={classes.slideContainer} >
            <Typography >
                Render speed (ms)
                </Typography>
            <Slider
                className={classes.slider}
                min={min}
                max={max}
                step={steps}
                value={value}
                onChange={(e, val) => handleChange(val)}
                onChangeCommitted={(e, val) => handleChangeCommitted(val)}
            />
            <div className={classes.buttonContainer}>
                <IconButton 
                    disabled={value === min} 
                    onClick={() => handleChangeCommitted(value - 25)} 
                    className={classes.addRemoveButtons} 
                >
                    <RemoveIcon fontSize={'small'} />
                </IconButton>
                <Typography className={classes.milliseconds}>{value}</Typography>
                <IconButton 
                    disabled={value === max} 
                    onClick={() => handleChangeCommitted(value + 25)} 
                    className={classes.addRemoveButtons}
                >
                    <AddIcon fontSize={'small'} />
                </IconButton>
            </div>
        </Box>
    )
}

export default SpeedSlider
