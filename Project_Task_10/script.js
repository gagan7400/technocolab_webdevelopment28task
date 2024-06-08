let getuserchoice = () => {
    let userinput = document.getElementById("userchoice").value;
    console.log(["rock", "paper", "scissors"].includes(userinput.toLowerCase()))
    if (["rock", "paper", "scissors"].includes(userinput.toLowerCase()) || userinput.toLowerCase()==="bomb") {
        console.log(userinput.toLowerCase())
        return userinput.toLowerCase()
    } else {
        console.error("error occueed")
    }
}

// Rock destroys scissors.

// Scissors cut paper.

// Paper covers rock.

// If there’s a tie, then the game ends in a draw.

let ComputerChoice = () => {
    let count = Math.floor(Math.random() * 3)
    let point = ["rock", "paper", "scissors"];
    console.log(point[count])
    return point[count]
}
let determinewinner = () => {
    let user = getuserchoice();
    let computer = ComputerChoice();
    let result  = ""
     if(user === "bomb"){
        result = ("user wins ") 
    }else if (user === "rock" && computer === "scissors") {
        result = ("user wins ")
    } else if (user === "scissors" && computer === "paper") {
        result = ("user wins ")
 } else if (user === "paper" && computer === "rock") {
        result = ("user wins")

    } else if (user === computer) {
        result = ("the match is draw ")
    }else{
        result = ("the computer wins")
    }
     document.getElementById("congrats").innerHTML = `<h1> ${result} </h1>`;
     setTimeout(()=>{
        document.getElementById("congrats").innerHTML = ""
     },2000)
}

