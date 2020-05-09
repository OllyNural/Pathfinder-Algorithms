const findIndexFromValue = (grid: any, value: any) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === value) return { x: i, y: j }
        }
    }
    return { x: 0, y: 0 }
}

const transformGrid = (grid: number[][]): number[][] => {
    const startRowPoint = {x: 0, y: 0}
    const startColumnPoint = {x: 0, y: 0}
    const endRowPoint = {x: 0, y: 0}
    const endColumnPoint = {x: 0, y: 0}

    // Start Row Point
    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if (grid[i][j] !== 0) {
                startRowPoint.x = i
                startRowPoint.y = j
                i = grid.length
                break;
            }
        }
    }
    // grid.some((row, i) => row.some((cell, j) => {
    //     if (cell !== 0) {
    //         startRowPoint.x = i
    //         startRowPoint.y = j
    //         return true
    //     }
    //     return false
    // }))

    // Start Column Point
    for (let j = 0; j < grid[0].length - 1; j++) {
        for (let i = 0; i < grid.length - 1; i++) {
            if (grid[i][j] !== 0) {
                startColumnPoint.x = i
                startColumnPoint.y = j
                j = grid[0].length
                break;
            }
        }
    }
    // End Row Point
    for (let i = grid.length - 1; i > 0; i--) {
        for (let j = grid[i].length - 1; j > 0; j--) {
            if (grid[i][j] !== 0) {
                endRowPoint.x = i
                endRowPoint.y = j
                i = 0
                break;
            }
        }
    }
    // End Column Point
    for (let j = grid[0].length - 1; j > 0; j--) {
        for (let i = grid.length - 1; i > 0; i--) {
            if (grid[i][j] !== 0) {
                endColumnPoint.x = i
                endColumnPoint.y = j
                j = 0
                break;
            }
        }
    }
    
    const topLeftCorner = {
        x: Math.min(startRowPoint.x, startColumnPoint.x),
        y: Math.min(startRowPoint.y, startColumnPoint.y)
    }
    const bottomRightCorner = {
        x: Math.max(endRowPoint.x, endColumnPoint.x),
        y: Math.max(endRowPoint.y, endColumnPoint.y),
    }

    // Create a new grid which is just the section of the original grid we actually care about
    const tempGrid = []
    for (let i = topLeftCorner.x; i <= bottomRightCorner.x; i++) {
        tempGrid.push(grid[i].slice(topLeftCorner.y, bottomRightCorner.y + 1))
    }
    const transformedGrid = padArray(tempGrid, 1, 1)
    return transformedGrid
}

/**
 * Pads a rectangular 2d array with a specified value and depth
 * @param array 2d Array to padd
 * @param padValue The numeric value to use as padding
 * @param padAmount The depth of padding
 */
const padArray = (array: number[][], padValue: number, padAmount: number): number[][] => {
    const newX = array.length + (2 * padAmount)
    const newY = array[0].length + (2 * padAmount)
    const paddedArray: number[][] = [...Array(newX)].map(() => [...Array(newY)].map(() => padValue));
    for (let i = 0; i <= array.length - 1; i++) {
        paddedArray[i + padAmount].splice(padAmount, array[i].length, ...array[i])
    }
    return paddedArray
}

export {
    findIndexFromValue,
    transformGrid
}