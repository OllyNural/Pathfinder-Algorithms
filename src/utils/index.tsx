const findIndexFromValue = (grid: any, value: any) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === value) return { x: i, y: j }
        }
    }
    return { x: 0, y: 0 }
}

export {
    findIndexFromValue
}