let timecheck = setInterval(() => {
    TimeTaken++;
}, 1000);

function popitup() {
    popup[0].style.opacity = '1';
    if (myHealth <= 0) {
        document.querySelector('.won').innerHTML = 'You Lost';
    } else {
        document.querySelector('.won').innerHTML = 'You Won';
    }
    document.getElementsByClassName('YourStats')[0].innerHTML =`Your Stats`;
    document.getElementsByClassName('BulletsFired')[0].innerHTML =`Bullets Fired: ${MyBullets}`;
    document.getElementsByClassName('FuelUsed')[0].innerHTML =`Extra Fuel Used: ${Fused}L`;
    document.getElementsByClassName('BulletsFiredByAliens')[0].innerHTML =`Bullets Fired By Aliens: ${OppBullets}`;
    document.getElementsByClassName('TimeTaken')[0].innerHTML =`Time Taken: ${TimeTaken} sec`;

    const neDiv = document.createElement('button');
    neDiv.textContent = "Play Again";
    neDiv.className = 'replay';
    neDiv.onclick = function() {
        location.reload();
    };
    popup[0].appendChild(neDiv);
    
}

