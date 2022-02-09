let turn = "X";
let num = 0;
let isEnd = false;

function switchTurn () {
    if(turn==="X") {
        turn = "O";
    }
    else if(turn==="O") {
        turn = "X"
    }
}

function addXAndO (event) {
    if(event.target.textContent === "") {
        if(turn === "X") {
            const newText = document.createElement("span");
            newText.textContent = "X";
            event.target.appendChild(newText);
            event.target.classList.add("X");
        }
        else if(turn === "O") {
            const newText = document.createElement("span");
            newText.textContent = "O";
            event.target.appendChild(newText);
            event.target.classList.add("O");
        }
        num++;
        switchTurn();
        checkWin();
        if(isEnd === false) {
            computerTurn();
        }
    }
}

function computerTurn () {
    let table = [document.querySelector("#cell1"),
    document.querySelector("#cell2"),
    document.querySelector("#cell3"),
    document.querySelector("#cell4"),
    document.querySelector("#cell5"),
    document.querySelector("#cell6"),
    document.querySelector("#cell7"),
    document.querySelector("#cell8"),
    document.querySelector("#cell9")];

    while(true) {
        let random = Math.floor(Math.random() * 9);
        if(table[random].children.length===0) {
            const newText = document.createElement("span");
            newText.textContent = turn;
            table[random].appendChild(newText);
            table[random].classList.add(turn);       
            switchTurn();
            num++;
            checkWin();
            break;
        }
    }

}

function checkWin () {
    const cell1 = document.querySelector("#cell1");
    const cell2 = document.querySelector("#cell2");
    const cell3 = document.querySelector("#cell3");
    const cell4 = document.querySelector("#cell4");
    const cell5 = document.querySelector("#cell5");
    const cell6 = document.querySelector("#cell6");
    const cell7 = document.querySelector("#cell7");
    const cell8 = document.querySelector("#cell8");
    const cell9 = document.querySelector("#cell9");

    let winner = "";
    let endFlag = false;

    if(cell1.textContent === cell2.textContent && cell1.textContent === cell3.textContent && (cell1.textContent === "X" || cell1.textContent === "O")) {
        endFlag = true;
        winner = cell1.textContent;
    }
    else if(cell4.textContent === cell5.textContent && cell4.textContent === cell6.textContent && (cell4.textContent === "X" || cell4.textContent === "O")) {
        endFlag = true;
        winner = cell4.textContent;
    }
    else if(cell7.textContent === cell8.textContent && cell7.textContent === cell9.textContent && (cell7.textContent === "X" || cell7.textContent === "O")) {
        endFlag = true;
        winner = cell7.textContent;
    }
    else if(cell1.textContent === cell4.textContent && cell1.textContent === cell7.textContent && (cell1.textContent === "X" || cell1.textContent === "O")) {
        endFlag = true;
        winner = cell1.textContent;
    }
    else if(cell2.textContent === cell5.textContent && cell2.textContent === cell8.textContent && (cell2.textContent === "X" || cell2.textContent === "O")) {
        endFlag = true;
        winner = cell2.textContent;
    }
    else if(cell3.textContent === cell6.textContent && cell3.textContent === cell9.textContent && (cell3.textContent === "X" || cell3.textContent === "O")) {
        endFlag = true;
        winner = cell3.textContent;
    }
    else if(cell1.textContent === cell5.textContent && cell1.textContent === cell9.textContent && (cell1.textContent === "X" || cell1.textContent === "O")) {
        endFlag = true;
        winner = cell1.textContent;
    }
    else if(cell3.textContent === cell5.textContent && cell3.textContent === cell7.textContent && (cell3.textContent === "X" || cell3.textContent === "O")) {
        endFlag = true;
        winner = cell3.textContent;
    }
    if(endFlag === true) {
        isEnd = true;
        table.removeEventListener('click', addXAndO);
        if(winner==="X") {
            let winText = document.querySelector(".result--win");
            winText.classList.remove("hidden");
        }
        else if(winner === "O") {
            let loseText = document.querySelector(".result--lose");
            loseText.classList.remove("hidden");
        }
    }
    else if(num === 9) {
        isEnd = true;
        table.removeEventListener('click', addXAndO);
        let tieText = document.querySelector(".result--tie");
        tieText.classList.remove("hidden");
    }
}

const table = document.querySelector("tbody");
table.addEventListener('click', addXAndO);
