function Oppballz(top1, left1) {
    OppBullets++;
    let newDiv = document.createElement("div");
    let upp = top1;
    let positionOpp = oppCanon[0].getBoundingClientRect().left;

    newDiv.classList.add("oppballz");
    newDiv.style.top = `${upp}px`;
    newDiv.style.left = `${positionOpp + left1}px`;
    document.body.appendChild(newDiv);

    let interval = setInterval(() => {
        upp += 4;
        newDiv.style.top = `${upp}px`;
        if (upp >= window.innerHeight + 100) {
            clearInterval(interval);
            newDiv.remove();
        }
    }, 2);
}

function fire() {
    let areaLeft = oppCanon[0].getBoundingClientRect().left;
    let myleft = gun[0].getBoundingClientRect().left;

    if (myleft > areaLeft - 50 && myleft < areaLeft + 350) {
        Oppballz(160, 150);
        Oppballz(130, 240);
        Oppballz(130, 60);
    }
}

let stopit = setInterval(fire, 90);
