import React, { memo, useContext } from 'react';

import './Node.css'
import AppContext from './AppContext';

type CardProps = {
    x: number,
    y: number,
    d: number,
    state: number,
    onMouseDown: (x: number, y: number) => void,
    onMouseUp: (x: number, y: number) => void,
    onHover: (x: number, y: number) => void,
}

const GridRect: React.FC<CardProps> = ({ x, y, d, state, onMouseDown, onMouseUp, onHover }) => {
    const { darkTheme }: {darkTheme: boolean} = useContext<AppContext>(AppContext);
    let nodeStyleClassName: string

    if (darkTheme) {
        // Dark Colour Theme
        nodeStyleClassName =
            state === 0 ? ''
                : state === 1 ? 'node-wall-dark'
                : state === 3 ? 'node-start-dark'
                : state === 4 ? 'node-finish-dark'
                : state === 5 ? 'node-traversed-path-dark'
                : 'node-shortest-path-dark'

        nodeStyleClassName += ' node-dark'
    } else {
        // Light Colour Theme
        nodeStyleClassName =
        state === 0 ? ''
            : state === 1 ? 'node-wall-light'
            : state === 3 ? 'node-start-light'
            : state === 4 ? 'node-finish-light'
            : state === 5 ? 'node-traversed-path-light'
            : 'node-shortest-path-light'

    nodeStyleClassName += ' node-light' 

    }

    const baseStyle = {
        height: d,
        width: d,
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
    // shouldComponentRerender
    (prevProps: Readonly<any>, nextProps: Readonly<any>) => {
        return prevProps.state === nextProps.state && prevProps.darkTheme === nextProps.darkTheme
    }
)
