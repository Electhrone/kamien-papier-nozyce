function Gra(wybor) {
    const wybory = ["Papier", "Kamień", "Nożyce"];
    const losuj = Math.floor(Math.random() * 3);

    let tekst = `Wybrałeś ${wybory[wybor]}, komputer wybrał ${wybory[losuj]}.`;

    if (wybor === losuj) {
        tekst += " Remis!";
    } else if (
        (wybor === 0 && losuj === 2) ||
        (wybor === 1 && losuj === 0) ||
        (wybor === 2 && losuj === 1)
    ) {
        tekst += " Wygrałeś!";
    } else {
        tekst += " Wygrał komputer!";
    }

    document.getElementById("wynik").innerText = tekst;
}