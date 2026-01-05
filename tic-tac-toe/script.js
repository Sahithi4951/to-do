let start = 'X';
let buttons = document.querySelectorAll(".cell");

// Click event for each cell
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.textContent === ""){
            btn.textContent = start;
            start = start === 'X' ? 'O' : 'X';
            checkWinner();
        }
    });
});

// Check winner function
function checkWinner() {
    const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    winCombos.forEach((combo) => {
        const [a,b,c] = combo;
        if(buttons[a].textContent &&
           buttons[a].textContent === buttons[b].textContent &&
           buttons[b].textContent === buttons[c].textContent) {
            
            buttons[a].classList.add("winner");
            buttons[b].classList.add("winner");
            buttons[c].classList.add("winner");

            setTimeout(() => {
                alert(buttons[a].textContent + " Wins!!");
                resetBoard();
            }, 100);
        }
    });
}

let reset = document.getElementById("reset");
reset.addEventListener("click", resetBoard);

function resetBoard(){
    buttons.forEach(btn => {
        btn.textContent = "";
        btn.classList.remove("winner");
    });
    start = 'X';
}
