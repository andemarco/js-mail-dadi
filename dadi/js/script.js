// IMPOSTARE CALCOLO DADI PER SINGOLO GIOCATORE
var playerOne = Math.floor(Math.random() * 6) + 1;
var playerTwo = Math.floor(Math.random() * 6) + 1;
// VINCE IL PUNTEGGIO PIU' ALTO
if (playerOne > playerTwo) {
  alert('Giocatore Uno hai vinto');
} else if(playerOne == playerTwo) {
  alert ('Un bel pareggio');
} else {
  alert ('Giocatore Due hai vinto');
}
// SCRIVI PUNTEGGI IN CONSOLE
console.log(playerOne);
console.log(playerTwo);
