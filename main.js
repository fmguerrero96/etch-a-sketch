const board = document.querySelector('#board')

function makeGrid(size) {
    for (let i = 0; i < size; i ++){
        let row = document.createElement('div');
        row.className = 'row';

        for (let x = 0; x < size; x++) {
            const widthAndHeight = 600 / size;
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = `${widthAndHeight}px`
            cell.style.height = `${widthAndHeight}px`
            row.appendChild(cell);
        }

        board.appendChild(row)
    }
}


makeGrid(3)