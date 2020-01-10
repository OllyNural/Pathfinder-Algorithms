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
    onMouseDown: (x: number, y: number) => void,
    onMouseUp: (x: number, y: number) => void,
    onHover: (x: number, y: number) => void,
    isStart: boolean,
    isFinish: boolean,
}

const GridRect: React.FC<CardProps> = ({ x, y, d, onMouseDown, onMouseUp, onHover, isStart, isFinish }) => {

    const baseStyle = {
        height: d,
        width: d,
        boxSizing: 'border-box' as 'border-box',
        border: '1px grey solid',
        margin: 0,
        padding: 0,
    };

    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : ''

    return (
        <div
            style={baseStyle}
            id={`${x}-${y}`}
            className={extraClassName}
            onMouseDown={() => onMouseDown(x, y)}
            onMouseUp={() => onMouseUp(x, y)}
            onMouseEnter={() => onHover(x, y)}
            >

        </div>
    );
}

export default React.memo(GridRect)
