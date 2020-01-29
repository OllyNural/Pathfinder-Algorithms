/// <reference path="../types/normalised.d.ts" />

import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

type settingsCheckboxProps = {
    label: string,
    disabled: boolean,
    onChange: () => void,
    checked: boolean,
}

const SettingsCheckbox: React.FC<settingsCheckboxProps> = ({ label, disabled, onChange, checked }) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    value="checkedB"
                    color="primary"
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
            }
            label={label}
        />
    )
}

export default SettingsCheckbox
