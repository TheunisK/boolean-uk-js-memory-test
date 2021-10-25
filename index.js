
function ordinal(position) {
    let j = position % 10;
    let k = position % 100;
    if (j == 1 && k != 11) {
        return position + "st";
    }  
    else if (j == 2 && k!= 12) {
        return position + "nd";
    }
    else if (j == 3 && k!= 13) {
        return position + "rd";
    }
    else {
        return position + "th";
    }
}

function playMemoryTest(numOfNums) {
    alert(`Get ready, there are ${numOfNums} numbers to remember!`);
    let randomNumbers = [];
    for (let i = 0; i < numOfNums; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        alert(`The number to remember is ${randomNum}`);
        randomNumbers.push(randomNum);
    }

    console.log(randomNumbers);

    let answers = [];

    setTimeout(askForNumbers, 1000);

    function askForNumbers() {
        for (let i = 1; i < (numOfNums + 1); i++) {
            let suffix = ordinal(i);
            let answer = prompt(`What was the ${suffix} number?`);
            answers.push(answer);
        }
        let counter = 0;

        for (let i = 0; i < randomNumbers.length; i++) {
            if (answers[i] == randomNumbers[i]) {
                counter++;
            }
        }

        console.log(counter);

        if (counter === randomNumbers.length) {
            alert("Your numbers match!");
        } else {
            alert("Incorrect!");
        }   

        console.log(randomNumbers);
        console.log(answers);
    }
}
let userWantsToGuess = Number(prompt("How many numbers would you like to try to remember?"));

playMemoryTest(userWantsToGuess);

