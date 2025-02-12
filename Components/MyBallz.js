function ballz() {
    MyBullets++;
    let newDiv = document.createElement("div");
    let upp = 60;

    newDiv.classList.add("ballz");
    newDiv.style.bottom = `${upp}px`;
    newDiv.style.left = `${position}%`;
    document.body.appendChild(newDiv);

    let interval = setInterval(() => {
        upp += 5;
        newDiv.style.bottom = `${upp}px`;
        if (upp >= window.innerHeight + 100) {
            clearInterval(interval);
            newDiv.remove();
        }
    }, 5);
}
