import React, { useState, useReducer } from 'react';

/**
 * 0: empty
 * 1: wall
 * 2: start
 * 3: end
 */
type CardProps = {
    x: number,
    y: number,
    d: number,
    state: number
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 0:
            return 'white';
        case 1:
            return 'black';
        default:
            throw new Error();
    }
}

// Needs a reference to where it is: x, y
// Size of rect 
const GridRect: React.FC<CardProps> = ({ x, y, d, state }) => {
    const nodeStyle = {
        height: d,
        width: d,
        position: 'relative' as 'relative',
        left: x * d,
        top: y * d,
        border: '1px grey solid'
    };

    // const [stateColor, dispatch] = useReducer(reducer, 'white');
    // dispatch(state);

    // const handleClick = (e: any) => {
    //     console.log('button', e.evt.button)
    //     console.log('buttons', e.evt.buttons)
    //     return setColor('black')
    // }

    // const handleDragStart = () => setColor('black')

    // const handleHover = (e: any) => {
    //     console.log('button', e.evt.button)
    //     console.log('buttons', e.evt.buttons)
    //     return e.evt.buttons && setGridItem(x, y, 1)
    // }

    return (
        <div style={nodeStyle}>

        </div>
    );
}

export default GridRect
