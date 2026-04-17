const choices = document.querySelectorAll(".choices");

let msg = document.querySelector("#msgArea");

let yourScore = document.querySelector("#yourScore");
let compScore = document.querySelector("#compScore");
const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = `Game was Draw. Play again.`;
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        yourScore.innerText++;
    }
    else {
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore.innerText++;
    }

}
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //Generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;//keep track is user win
        if (userChoice === "Rock") {
            //Paper,Scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            //Rock,Scissors
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {//Scissors
            //Rock,Paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
        choice.classList.add("changeBackground");
        
        setTimeout(() => {
            choice.classList.remove("changeBackground");
        }, 500); //delay

    });
});
