import React from 'react';
import { Stage, Layer } from 'react-konva';

import GridRect from './GridRect'

const rectDiameter = 20
const gridHeightRatio = 0.9

const Grid: React.FC = () => {

    const gridHeight: number = window.innerWidth
    const gridWidth: number = window.innerHeight * gridHeightRatio

    const numX: number = Math.floor(gridHeight / rectDiameter)
    const numY: number = Math.floor(gridWidth / rectDiameter)

    const grid = [...Array(numX)].map(e => Array(numY).fill(0));

    const setGridItem = (x: number, y: number, state: number) => grid[x][y] = state

    return (
        <Stage width={gridHeight} height={gridWidth}>
            <Layer>
                {grid.map((row, i) => 
                    row.map((val, j) => 
                        <GridRect x={i} y={j} d={rectDiameter} state={val} setGridItem={setGridItem} />
                    )
                )}
                
            </Layer>
        </Stage>
    );
}

export default Grid
