let my = 0, cy = 0;

function playGame(userChoice) {
    const options = ['ROCK', 'PAPER', 'SCISSOR'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    document.getElementById("min1").innerHTML = userChoice;
    document.getElementById("min2").innerHTML = computerChoice;

    let result = '';

    if (userChoice === computerChoice) {
        result = 'DRAW';
        document.getElementById("min3").style.color = 'blue';
    } else if (
        (userChoice === 'ROCK' && computerChoice === 'SCISSOR') ||
        (userChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (userChoice === 'SCISSOR' && computerChoice === 'PAPER')
    ) {
        result = 'YOU WON';
        document.getElementById("min3").style.color = 'green';
        my++;
        document.getElementById("min4").innerHTML = my;
    } else {
        result = 'YOU LOOSE';
        document.getElementById("min3").style.color = 'red';
        cy++;
        document.getElementById("min5").innerHTML = cy;
    }

    document.getElementById("min3").innerHTML = result;
}
