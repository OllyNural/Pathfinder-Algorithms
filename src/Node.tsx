import React, { memo } from 'react';

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
    onMouseDown: (x: number, y: number) => void,
    onMouseUp: (x: number, y: number) => void,
    onHover: (x: number, y: number) => void
}

const GridRect: React.FC<CardProps> = ({ x, y, d, state, onMouseDown, onMouseUp, onHover }) => {

    let nodeStyleClassName =
        state === 0 ? ''
            : state === 1 ? 'node-wall'
                : state === 3 ? 'node-start'
                    : 'node-finish'

        nodeStyleClassName += ' node'

    const baseStyle = {
        height: d,
        width: d,
        border: state !== 0 ? 'none' : '1px rgb(152, 152, 152) solid',
    };

    return (
        <div
            style={baseStyle}
            id={`${x}-${y}`}
            onMouseDown={() => onMouseDown(x, y)}
            onMouseUp={() => onMouseUp(x, y)}
            onMouseEnter={() => onHover(x, y)}
            className={nodeStyleClassName}
        >

        </div>
    );
}

export default memo(
    GridRect, 
    (prevProps: Readonly<any>, nextProps: Readonly<any>) => {
        return prevProps.state === nextProps.state
    }
)
