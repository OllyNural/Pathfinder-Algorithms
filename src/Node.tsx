import React, { memo, useContext } from 'react';

import './Node.css'
import AppContext from './AppContext';

type CardProps = {
    x: number,
    y: number,
    d: number,
    nodeState: number,
    onMouseDown: (x: number, y: number) => void,
    onMouseUp: (x: number, y: number) => void,
    onHover: (x: number, y: number) => void,
}

const GridRect: React.FC<CardProps> = ({ x, y, d, nodeState, onMouseDown, onMouseUp, onHover }) => {
    const { state } = useContext<AppContext>(AppContext)

    const { darkTheme }: {darkTheme: boolean} = state

    let nodeStyleClassName: string

    if (darkTheme) {
        // Dark Colour Theme
        nodeStyleClassName =
            nodeState === 0 ? ''
                : nodeState === 1 ? 'node-wall-dark'
                : nodeState === 3 ? 'node-start-dark'
                : nodeState === 4 ? 'node-finish-dark'
                : nodeState === 5 ? 'node-traversed-path-dark'
                : 'node-shortest-path-dark'

        nodeStyleClassName += ' node-dark'
    } else {
        // Light Colour Theme
        nodeStyleClassName =
        nodeState === 0 ? ''
            : nodeState === 1 ? 'node-wall-light'
            : nodeState === 3 ? 'node-start-light'
            : nodeState === 4 ? 'node-finish-light'
            : nodeState === 5 ? 'node-traversed-path-light'
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
        return prevProps.nodeState === nextProps.nodeState && prevProps.darkTheme === nextProps.darkTheme
    }
)
