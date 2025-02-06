function end() {
    gun[0].remove();
    oppCanon[0].remove();
    clearInterval(heal);
    clearInterval(attk);
    clearInterval(defe);
    clearInterval(stopit);
    popitup();
    clearInterval(checkfuelinterval);
    clearInterval(timecheck);
    setTimeout(() => {
        clearInterval(checkfuelupdate);
    }, 100);
    
    document.removeEventListener("keydown", handleKeydown);
}