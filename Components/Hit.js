function isColliding(div1, div2) {
    if (!div1 || !div2) return false;

    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

let defe = setInterval(() => {
    for (let i = 0; i < oppCanonballs.length; i++) {
        if (isColliding(gun[0], oppCanonballs[i])) {
            oppCanonballs[i].remove();
            myHealth--;
        }
    }
}, 1);

let attk = setInterval(() => {
    for (let i = 0; i < myballs.length; i++) {
        if (isColliding(oppCanon[0], myballs[i])) {
            myballs[i].remove();
            oppHealth--;
        }
    }
}, 1);

let heal = setInterval(() => {
    if ((myHealth <= 0) || (oppHealth <= 0)) {
        end();
    }
}, 100);
