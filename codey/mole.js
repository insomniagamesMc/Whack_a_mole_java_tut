let currMoleTile;
let currGobbTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setgame();
}

function setgame() {
    //setup grid for the rest the game
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click" , selectTile)
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setGobb, 1000);

}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "textures/mole.png";

    let num = getRandomTile();
    if (currGobbTile && currMoleTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setGobb() {
    if (gameOver) {
        return;
    }
    if (currGobbTile) {
        currGobbTile.innerHTML = "";
    }

    let gobb = document.createElement("img");
    gobb.src = "textures/moletroll.png";

    let num = getRandomTile();

    if (currGobbTile && currMoleTile.id == num) {
        return;
    }

    currGobbTile = document.getElementById(num);
    currGobbTile.appendChild(gobb);


}

function selectTile () {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }

    else if (this == currGobbTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true
        return;
    }
}