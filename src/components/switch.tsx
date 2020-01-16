import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { Box } from '@material-ui/core';

type SwitchProps = {
    isDarkTheme: boolean,
    handleChange: () => void
}

const useSwitchStyles = makeStyles({
    switchBase: {
        color: 'white',
        colorPrimary: 'white',
        colorSecondary: 'white',
        '&$checked': {
            color: 'black',
            colorPrimary: 'black',
            colorSecondary: 'black',
            // backgroundColor: '#000000'
        },
        '&$checked + $track': {
            color: '#ffffff',
        },
    },
    checked: {},
    track: {},
    root: {
    }
});

const SwitchFunc: React.FC<SwitchProps> = ({ isDarkTheme, handleChange }) => {
    const switchClasses = useSwitchStyles({})
    return (
        <Box display="flex" flexDirection="row">
            <WbSunnyIcon fontSize={'large'} style={{ color: '#EBD52F' }} />
            <Switch
                className={switchClasses.switchBase}
                classes={{
                    root: switchClasses.root,
                    switchBase: switchClasses.switchBase,
                    track: switchClasses.track,
                    checked: switchClasses.checked,
                }}
                checked={isDarkTheme}
                onChange={() => handleChange()}
                value="checkDarkTheme"
                inputProps={{ 'aria-label': 'Dark Theme Toggle' }}
                color='primary'
            />
            <Brightness3Icon fontSize={'large'} style={{ color: '#ADA9C6' }} />
        </Box>
    )
}

export default SwitchFunc