let gun = document.getElementsByClassName('cylinder');
let oppCanon = document.getElementsByClassName('opp-canon');
let myballs = document.getElementsByClassName('ballz');
let oppCanonballs = document.getElementsByClassName('oppballz');
let popup = document.getElementsByClassName('pop-up');


let position = 50;
let spaceTime = true;
let myHealth = 5;
let oppHealth = 10;
let fuel = 1000;
let Fused = 0;
let MyBullets = 0;
let OppBullets = 0;
let TimeTaken = 0;
const keys = {};


function yoho() {
    gun[0].style.left = `${position}%`;
}

function handleKeydown(event) {
    keys[event.code] = true;
};

document.addEventListener("keyup", (event) => {
    keys[event.code] = false;
});

document.addEventListener("keydown", handleKeydown);

function handleActions() {
    if (keys["ArrowLeft"] && position > 1 && fuel >= 1) {
        position -= 0.3;
        fuel--;
        Fused++;
        yoho();
    } if (keys["ArrowRight"] && position < 99 && fuel >= 1) {
        position += 0.3;
        fuel--;
        Fused++;
        yoho();
    } if ((keys["Space"]) && spaceTime && fuel >= 50) {
        ballz();
        fuel -= 50;
        Fused+= 50;
        spaceTime = false;
        setTimeout(() => {
            spaceTime = true;
        }, 800);
    }
    requestAnimationFrame(handleActions);
}

handleActions();
