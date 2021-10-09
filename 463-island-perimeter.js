let grid = [[1, 1], [1, 1]]

const islandPerimeter = function (grid) {
    let island = 0
    let neighbor = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                island++
                if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbours++; // count down neighbours
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1) neighbours++; // count right neighbours
            }
        }
    }
    return island * 4 - neighbor * 2
}