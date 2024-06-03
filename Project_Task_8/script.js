let userName = "";
console.log(userName ? "Hello " + userName : "Hello!")

let userQuestion = "Hello Buddy , How are you ?";
console.log("object")
let randomNumber = Math.floor(Math.random() * 22);
console.log(randomNumber)
let eightBall = "";

switch (randomNumber) {
    case 0: eightBall = "It is certain"; break;
    case 1: eightBall = "Reply hazy try again"; break;
    case 2: eightBall = "It is decidedly so"; break;
    case 3: eightBall = "Cannot predict now"; break;
    case 4: eightBall = "Do not count on it"; break;
    case 5: eightBall = "My sources say no"; break;
    case 6: eightBall = "Outlook not so good"; break;
    case 6: eightBall = "Signs point to yes"; break;

}
console.log(eightBall)