let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newGmBtn = document.querySelector(".newGmBtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msgg = document.querySelector(".msgg");

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (box.innerText === "") { // Ensure the box is empty before adding text
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true; // Disable the box after a move
            checkWinner();
        }
    });
});

const showWinner = (winner) => {
    msgg.innerText = `Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove("hide"); // Correct way to remove the "hide" class
    boxes.forEach((box) => box.disabled = true); // Disable all boxes after a win
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let positionVal1 = boxes[pattern[0]].innerText;
        let positionVal2 = boxes[pattern[1]].innerText;
        let positionVal3 = boxes[pattern[2]].innerText;
        if (positionVal1 !== "" && positionVal2 !== "" && positionVal3 !== "") {
            if (positionVal1 === positionVal2 && positionVal2 === positionVal3) {
                console.log("winner", positionVal1);
                
                showWinner(positionVal1);
                return;
            }
        }
    }
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcontainer.classList.add("hide");
    turnO = true;
});

newGmBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcontainer.classList.add("hide");
    turnO = true;
});
