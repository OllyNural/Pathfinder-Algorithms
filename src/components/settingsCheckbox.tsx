/// <reference path="../types/normalised.d.ts" />

import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

type settingsCheckboxProps = {
    label: string,
    disabled: boolean,
}

const SettingsCheckbox: React.FC<settingsCheckboxProps> = ({ label, disabled }) => {
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
