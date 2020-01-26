/// <reference path="../types/normalised.d.ts" />

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left'
        },
    }));

type settingsCheckboxProps = {
    label: string,
    disabled: boolean,
}

const SettingsCheckbox: React.FC<settingsCheckboxProps> = ({ label, disabled }) => {
    const classes = useStyles({})

    return (
        <FormControlLabel
            control={
                <Checkbox
                    value="checkedB"
                    color="primary"
                    disabled={disabled}
                />
            }
            label={label}
        />
    )
}

export default SettingsCheckbox
