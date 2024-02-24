function solution(n) {
    let answer = create2DArray(n)
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 1;

    for (let i = 1; i <= n * n; i++) {
        answer[x][y] = i;

        let nextX = x + dx;
        let nextY = y + dy;

        if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= n || answer[nextX][nextY] !== 0) {
            [dx, dy] = changeDirection(dx, dy)
            nextX = x + dx;
            nextY = y + dy;
        }

        x = nextX
        y = nextY
    }

    return answer;
}

function create2DArray(n) {
    return Array.from({length: n}, () => Array.from({length: n}, () => 0))
}

function changeDirection(dx, dy) {
    return [dy, -dx]
}