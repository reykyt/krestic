let cells = document.querySelectorAll("#field td")
let field = document.querySelector("#field")
function start(cells) {
    let i = 0
    for (let cell of cells) {
        cell.addEventListener("click", function step() {
            if (i % 2 == 0) {
                this.textContent = "✕"

            }
            else {
                this.textContent = "0"
            }
            this.removeEventListener("click", step)
            if (isWinner(cells)) {
                modal.textContent = `победитель: ${this.textContent}`
                this.removeEventListener("click", step)
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
        [0, 1, 6],
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

start(cells)