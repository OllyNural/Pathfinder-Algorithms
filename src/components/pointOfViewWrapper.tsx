import React, { useContext } from 'react';

import MenuDrawerPersistent from './menuDrawerPersistent'
import World from './world'
import Grid from '../Grid'

import AppContext from '../AppContext'

const PointOfViewWrapper: React.FC = () => {

    const { state: { perspective } } = useContext<AppContext>(AppContext);

    const isTopDown: boolean = perspective === 'topdown'

    return (
        <>
            {!!isTopDown ? 
                (
                    <>
                        <MenuDrawerPersistent />
                        <Grid />
                    </>
                ) : 
                (
                    <>
                        <MenuDrawerPersistent />
                        <World />
                    </>
                )
            }
        </>
    )
}

export default PointOfViewWrapper;
