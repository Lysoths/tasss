const images1 = document.querySelectorAll(".left-side img");
const images2 = document.querySelectorAll(".right-side img");
const timers = document.querySelector(".middle-side .timer h1");
const winner = document.querySelector(".middle-side .kazanan h1");
const computerScores = document.querySelector(".player2 p");
const playersScores = document.querySelector(".player1 p");
const again = document.querySelector("button");

let clicked;
let clickedImage;

let playerScore = 0;
let computerScore = 0;

images1.forEach((a, b) => {
  a.addEventListener("click", (e) => {
    computer();
    clicked = a.classList.value;
    clickedImage = b;
    images1[0].style = "pointer-events:none";
    images1[1].style = "pointer-events:none";
    images1[2].style = "pointer-events:none";
    timers.innerText = "Bilgisayar kararını veriyor";
    winner.innerText = `${clicked} Seçildi ...`;
  });
});

const computer = function () {
  let randomNumber = Math.ceil(Math.random() * 3 - 1);
  timers.classList.add("active");

  setTimeout(() => {
    let i = 1;
    timers.innerText = i++;
    timers.classList.remove("active");
    images2[0].classList.remove("active");
    images2[1].classList.remove("active");
    images2[2].classList.remove("active");

    setTimeout(() => {
      timers.innerText = i++;
      setTimeout(() => {
        timers.innerText = i++;
        i = 1;
        let lastResult = images2[randomNumber].classList.value;
        timers.classList.remove("active");
        if (lastResult == "kagit" && clicked == "tas") {
          winner.innerText = "Bilgisayar 1 Puan Kazandı !";
          images2[randomNumber].classList.add("active");
          images1[clickedImage].classList.add("active");
          computerScore++;
          computerScores.innerText = ` Score : ${computerScore}`;
        } else if (lastResult == "kagit" && clicked == "makas") {
          winner.innerText = "Oyuncu 1 Puan Kazandı !";
          images2[randomNumber].classList.add("active");
          images1[clickedImage].classList.add("active");
          playerScore++;
          playersScores.innerText = ` Score : ${playerScore}`;
        } else if (lastResult == "kagit" && clicked == "kagit") {
          winner.innerText = "Berabere ! Puan Yok";
        } else if (lastResult == "makas" && clicked == "kagit") {
          winner.innerText = "Bilgisayar 1 Puan Kazandı !";
          images2[randomNumber].classList.add("active");
          images1[clickedImage].classList.add("active");
          computerScore++;
          computerScores.innerText = ` Score : ${computerScore}`;
        } else if (lastResult == "makas" && clicked == "tas") {
          winner.innerText = "Oyuncu 1 Puan Kazandı !";
          images2[randomNumber].classList.add("active");
          images1[clickedImage].classList.add("active");
          playerScore++;
          playersScores.innerText = ` Score : ${playerScore}`;
        } else if (lastResult == "makas" && clicked == "makas") {
          winner.innerText = "Berabere ! Puan Yok";
        } else if (lastResult == "tas" && clicked == "makas") {
          winner.innerText = "Bilgisayar 1 Puan Kazandı !";
          images2[randomNumber].classList.add("active");
          images1[clickedImage].classList.add("active");
          computerScore++;
          computerScores.innerText = ` Score : ${computerScore}`;
        } else if (lastResult == "tas" && clicked == "tas") {
          winner.innerText = "Berabere ! Puan Yok";
        } else if (lastResult == "tas" && clicked == "kagit") {
          winner.innerText = "Oyuncu 1 Puan Kazandı !";
          images2[randomNumber].classList.add("active");
          images1[clickedImage].classList.add("active");
          playerScore++;
          playersScores.innerText = ` Score : ${playerScore}`;
        }

        if (playerScore == 3) {
          winner.innerText = `Oyuncu Kazandı !`;
          playerScore = 0;
          computerScore = 0;
          again.style = "opacity:1";
          images1[0].style = "pointer-events:none";
          images1[1].style = "pointer-events:none";
          images1[2].style = "pointer-events:none";
        } else if (computerScore == 3) {
          winner.innerText = `Bilgisayar Kazandı !`;
          playerScore = 0;
          computerScore = 0;
          again.style = "opacity:1";
          images1[0].style = "pointer-events:none";
          images1[1].style = "pointer-events:none";
          images1[2].style = "pointer-events:none";
        }

        setTimeout(() => {
          images1[0].classList.remove("active");
          images1[1].classList.remove("active");
          images1[2].classList.remove("active");
          images2[0].classList.remove("active");
          images2[1].classList.remove("active");
          images2[2].classList.remove("active");
          images1[0].style = "pointer-events:auto";
          images1[1].style = "pointer-events:auto";
          images1[2].style = "pointer-events:auto";
        }, 2000);
      }, 1200);
    }, 1300);
  }, 1400);
};

again.addEventListener("click", () => {
  location.reload();
});
