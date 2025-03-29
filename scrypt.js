let cells = document.querySelectorAll("#field td");
let field = document.querySelector("#field");;
let ref = document.querySelector(".ref");
//проверка состояния игры



function start(cells) {
    let gameOver = false;
    let i = 0
    ref.classList.add("ref")
    ref.classList.remove("reff")
    for (let cell of cells) {
        cell.addEventListener("click", function step() {
            if (gameOver) {

                return;
            }
            if (i % 2 == 0) {
                this.textContent = "✕"

            }
            else {
                this.textContent = "0"
            }
            this.removeEventListener("click", step)
            if (isWinner(cells)) {
                modal.textContent = `победитель: ${this.textContent}`
                gameOver = true;
                this.removeEventListener("click", step)
                ref.classList.remove("ref")
                ref.classList.add("reff")
            }
            else if (i > 7) {
                modal.textContent = `победитель:ничья`
                ref.classList.remove("ref")
                ref.classList.add("reff")
                gameOver = true;
            }
            i++

        })
    }
}
function isWinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != "") {
            return true;
        }

    }
    return false;
}

ref.addEventListener("click", () => {
    for (let cell of cells) {
        cell.textContent = ``;

    }
    modal.textContent = `победитель:?`;

    start(cells);
})
start(cells)