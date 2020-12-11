const candidate = Array(45).fill().map((value, index) => index + 1);
const shuffle = [];
while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}
console.log(shuffle);
const balls = shuffle.slice(0, 6).sort(sorted);
const bonus = shuffle[44];
console.log(balls, bonus);

function sorted(pre, curr) {
    return pre - curr; //0보다 작으면 자리를 바꿈
}

function colorize(number, tag) {
    if (number <= 10) {
        tag.style.backgroundColor = 'red';
        tag.style.color = 'white';
    }
    else if (number <= 20) {
        tag.style.backgroundColor = 'orange';
        tag.style.color = 'white';
    }
    else if (number <= 30) {
        tag.style.backgroundColor = 'blue';
        tag.style.color = 'white';
    }
    else {
        tag.style.backgroundColor = 'green';
        tag.style.color = 'white';
    }
}


const resultTag = document.querySelector('#result');
for (let i = 0; i < balls.length; i++) {
    setTimeout(()=>{
    const ball = document.createElement('div');
    ball.className = 'ball';
    colorize(balls[i], ball);
    ball.textContent = balls[i];
    resultTag.append(ball);
    },1000*i);
}

const bonusTag = document.querySelector('#bonus');
setTimeout(()=>{
const bonusBall = document.createElement('div');
bonusBall.className = 'ball';
colorize(bonus, bonusBall);
bonusBall.textContent = bonus;
bonusTag.append(bonusBall);
},7000);