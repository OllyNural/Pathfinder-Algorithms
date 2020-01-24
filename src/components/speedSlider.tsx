/// <reference path="../types/normalised.d.ts" />

import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Box, Typography, TextField } from '@material-ui/core';
import AppContext from '../AppContext';

const useSwitchStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideContainer: {
        width: '80%',
    }
});

const SpeedSlider: React.FC = () => {

    const min = 25
    const max = 2000
    const steps = 25

    const { state, dispatch } = useContext<AppContext>(AppContext)
    const { renderSpeed }: { renderSpeed: number } = state
    const [value, setValue] = useState(renderSpeed)

    const classes = useSwitchStyles({})

    const handleChange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (typeof value === 'number') setValue(value)
    }

    const handleChangeCommitted = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (typeof value === 'number') {
            setValue(value)
            dispatch({renderSpeed: value})
        }
    }

    // const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     console.log(event)
    // }

    return (
        <Box pt={5} className={classes.root} >
            <Box className={classes.slideContainer} >
                <Typography>
                    Current Speed of rendering in Milliseconds: {value}
                </Typography>
                <Slider 
                    min={min}
                    max={max}
                    step={steps}
                    defaultValue={value}
                    onChange={handleChange} 
                    onChangeCommitted={handleChangeCommitted}
                />
                {/* <TextField onChange={handleTextFieldChange} value={value} /> */}
            </Box>
        </Box>
    )
}

export default SpeedSlider