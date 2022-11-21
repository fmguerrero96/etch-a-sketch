let color = 'black'

function createBoard(size) {
    const board = document.querySelector('#board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDIvs = size * size;
    for (let i = 0; i < numDIvs; i++){
        let div = document.createElement('div'); //creating cells
        div.className = 'cell'
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement("beforeend", div)//inserting cells into container

    }
}

function colorDiv(){
    if (color == 'rainbow')
        {this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;}
        else if (color == 'blue')
        {this.style.backgroundColor = 'rgb(0, 145, 255)';}
        else if (color == 'red')
        {this.style.backgroundColor = 'rgb(238, 6, 6)';}
        else if (color == 'white')
        {this.style.backgroundColor = 'rgb(240, 248, 255)';}
        else {this.style.backgroundColor = 'black'}      
}

function changeColor(colorChoice){
    color = colorChoice;
}

function clearBoard(){
    let divs = document.querySelectorAll('.cell');
    divs.forEach((div) => div.style.backgroundColor = 'rgb(240, 248, 255)');
}

