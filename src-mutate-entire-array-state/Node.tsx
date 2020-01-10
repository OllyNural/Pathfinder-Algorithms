import React from 'react';

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
    onClick: (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => void,
    onHover: (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => void
}

// const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 0:
//             return 'white';
//         case 1:
//             return 'black';
//         default:
//             throw new Error();
//     }
// }

// Needs a reference to where it is: x, y
// Size of rect 
const GridRect: React.FC<CardProps> = ({ x, y, d, state, onClick, onHover }) => {

    const wallStyle = {
        backgroundColor: 'black' as 'black',
    }

    const baseStyle = {
        height: d,
        width: d,
        boxSizing: 'border-box' as 'border-box',
        border: '1px grey solid',
        margin: 0,
        padding: 0,
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClick(e, x, y)
    }

    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        onHover(e, x, y)
    }

    let styles = {
        ...baseStyle
    }

    if (state === 1) styles = {...styles, ...wallStyle}

    return (
        <div
            style={styles} 
            id={`${x}-${y}`}
            onClick={handleClick}
            onMouseEnter={handleHover}>

        </div>
    );
}

export default GridRect
