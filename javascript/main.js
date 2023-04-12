let allTile = document.querySelectorAll(".xoContainer .tile");
let para = document.querySelector(".para");
let title = document.querySelector(".change");
let innerTile = [];
let currentTurn = ["x", "o"];
let newTurn = currentTurn[Math.floor(Math.random() * currentTurn.length)];
let scoreX = sessionStorage.getItem("scoreX") || 0;
let scoreY = sessionStorage.getItem("scoreY") || 0;
title.textContent = ` ${newTurn} `;
function winner() {
  for (let i = 1; i <= 9; i++) {
    innerTile[i] = document.getElementById("item" + i).innerHTML;
  }
  function finalResults(num1, num2, num3) {
    if (innerTile[num1] == "x") {
      scoreX++;
      sessionStorage.setItem("scoreX", scoreX);
    } else {
      scoreY++;
      sessionStorage.setItem("scoreY", scoreY);
    }
    allTile.forEach((tile) => {
      tile.parentElement.classList.add("prevent");
    });
    title.parentElement.innerHTML = `<span>${innerTile[num1]}</span> is Winner`;
    document.getElementById("item" + num1).style.cssText =
      "transform:rotate(360deg);background-color: lightblue;font-size:150px;font-weight:bolder;";
    document.getElementById("item" + num2).style.cssText =
      "transform:rotate(360deg);background-color: lightblue;font-size:150px;font-weight:bolder;";
    document.getElementById("item" + num3).style.cssText =
      "transform:rotate(360deg);background-color: lightblue;font-size:150px;font-weight:bolder;";
    setInterval((e) => {
      para.innerHTML += "<span>.</span";
      setTimeout(() => {
        location.reload();
      }, 4500);
    }, 1700);
  }
  if (
    innerTile[1] == innerTile[2] &&
    innerTile[2] == innerTile[3] &&
    innerTile[1] !== ""
  ) {
    finalResults(1, 2, 3);
  } else if (
    innerTile[4] == innerTile[5] &&
    innerTile[5] === innerTile[6] &&
    innerTile[4] !== ""
  ) {
    finalResults(4, 5, 6);
  } else if (
    innerTile[7] == innerTile[8] &&
    innerTile[8] === innerTile[9] &&
    innerTile[7] !== ""
  ) {
    finalResults(7, 8, 9);
  } else if (
    innerTile[1] == innerTile[5] &&
    innerTile[5] === innerTile[9] &&
    innerTile[9] !== ""
  ) {
    finalResults(1, 5, 9);
  } else if (
    innerTile[3] == innerTile[5] &&
    innerTile[5] === innerTile[7] &&
    innerTile[7] !== ""
  ) {
    finalResults(3, 5, 7);
  } else if (
    innerTile[1] == innerTile[4] &&
    innerTile[4] === innerTile[7] &&
    innerTile[4] !== ""
  ) {
    finalResults(1, 4, 7);
  } else if (
    innerTile[2] == innerTile[5] &&
    innerTile[5] === innerTile[8] &&
    innerTile[8] !== ""
  ) {
    finalResults(2, 5, 8);
  } else if (
    innerTile[3] == innerTile[6] &&
    innerTile[6] === innerTile[9] &&
    innerTile[9] !== ""
  ) {
    finalResults(3, 6, 9);
  } else {
    if (
      innerTile[1] &&
      innerTile[2] &&
      innerTile[3] &&
      innerTile[4] &&
      innerTile[5] &&
      innerTile[6] &&
      innerTile[7] &&
      innerTile[8] &&
      innerTile[9] !== ""
    ) {
      title.parentElement.innerHTML = `<span>equality</span>`;
      setInterval(() => {
        para.innerHTML += "<span>.</span>";
        setTimeout(() => {
          location.reload();
        }, 3500);
      }, 1700);
    }
  }
}
allTile.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    if (newTurn === "x" && e.target.innerHTML == "") {
      e.target.innerHTML = "x";
      title.innerHTML = " o ";
      newTurn = "o";
    } else if (newTurn === "o" && e.target.innerHTML === "") {
      e.target.innerHTML = "o";
      title.innerHTML = " x ";
      newTurn = "x";
    }
    winner();
  });
});
let newX = JSON.parse(sessionStorage.getItem("scoreX"));
let newY = JSON.parse(sessionStorage.getItem("scoreY"));
document.querySelector(".x .valueX").textContent = scoreX;
document.querySelector(".y .valueY").textContent = scoreY;
