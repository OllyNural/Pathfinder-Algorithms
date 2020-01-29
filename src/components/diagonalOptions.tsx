/// <reference path="../types/normalised.d.ts" />

import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import SettingsCheckbox from './settingsCheckbox'
import AppContext from '../AppContext';

const DiagonalOptions: React.FC = () => {

    const { state, dispatch } = useContext<AppContext>(AppContext)
    const { options: { directions } }: { options: { directions: any } } = state

    const diagonal = directions.northeast && directions.southeast && directions.southwest && directions.northwest

    const handleSingleChange = (name: string) => () => {
        dispatch({ options: { directions: {
            [name]: !directions[name],
        } } });
    }

    const handleChange = (name: string) => () => {
        // If any of them are off, turn them all on
        // Else, turn them all off
        const currDirs = [
            directions.northeast,
            directions.southeast,
            directions.southwest,
            directions.northwest
        ]

        const newDirectionValue = currDirs.every(dir => !!dir)

        dispatch({ options: { directions: {
            northeast: !newDirectionValue,
            southeast: !newDirectionValue,
            southwest: !newDirectionValue,
            northwest: !newDirectionValue,
        } } });
    };

    return (
        <>
            <SettingsCheckbox checked={diagonal} disabled={false} onChange={handleChange('diagonal')} label={'Allow Diagonal'} />
            {/* <PieMenu /> */}
            <Box pl={2} display={'flex'} flexDirection={'column'} >
                <SettingsCheckbox onChange={handleSingleChange('northwest')} checked={directions.northwest} disabled={false} label={'North-West'} />
                <SettingsCheckbox onChange={handleSingleChange('northeast')} checked={directions.northeast} disabled={false} label={'North-East'} />
                <SettingsCheckbox onChange={handleSingleChange('southeast')} checked={directions.southeast} disabled={false} label={'South-East'} />
                <SettingsCheckbox onChange={handleSingleChange('southwest')} checked={directions.southwest} disabled={false} label={'South-West'} />
            </Box>
        </>
    )
}

export default DiagonalOptions
