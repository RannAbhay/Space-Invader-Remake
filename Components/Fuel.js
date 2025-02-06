let checkfuelupdate =setInterval(() => {
    document.getElementsByClassName('fuel')[0].innerHTML = `<p>Your Health: ${myHealth}</p> <p>Opp Health: ${oppHealth}</p> <p>Fuel: ${fuel} L</p>`;
}, 1);

let checkfuelinterval = setInterval(() => {
    checkFuel();
}, 30);

function checkFuel() {
    if (areNoKeysPressed() && fuel < 1000) {
        Fused++;
        fuel++;
    }
}

function areNoKeysPressed() {
    return Object.values(keys).every(value => !value);
}
