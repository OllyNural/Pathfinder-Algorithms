import React from 'react';

import './Node.css'

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
    state: number,
    onMouseDown: (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => void,
    onMouseUp: (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => void,
    onHover: (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => void
}

const GridRect: React.FC<CardProps> = ({ x, y, d, state, onMouseDown, onMouseUp, onHover }) => {

    const baseStyle = {
        height: d,
        width: d,
        boxSizing: 'border-box' as 'border-box',
        border: '1px grey solid',
        margin: 0,
        padding: 0,
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        onMouseDown(e, x, y)
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        onMouseUp(e, x, y)
    }

    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        onHover(e, x, y)
    }

    return (
        <div
            style={baseStyle}
            id={`${x}-${y}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleHover}
            className={`${state ? 'node-wall' : ''}`}
        >

        </div>
    );
}

export default React.memo(GridRect)
