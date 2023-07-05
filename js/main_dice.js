/*
Gioco dei dadi:

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
---------------------------------------------------------------------------------
BONUS: far inserire 3 numeri all’utente, generare per il pc 3 numeri, e dopo 
aver calcolato la somma dei numeri dell’utente e dei numeri del pc, 
capire chi ha vinto in base alla somma maggiore.
---------------------------------------------------------------------------------
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma 
così come lo faremmo “a mano”
Buon lavoro e buon divertimento!
*/

// creo le variabili che rappresentano il giocatore e il "pc".
// assegno valore random massimo di 6 in quanto sto simulando dei dadi.
const player1 = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

//stampo i valori risultanti dalle variabili con random.
console.log("Player1:" + " " + player1);
console.log("Computer:" + " " + computer);

//imposto la condizione per stabilire per stabilire il vincitore (punteggio più alto)
if (player1 > computer) {
  console.log("Hai vinto!");
} else if (computer === player1) {
  console.log("Pareggio!");
} else {
  console.log("Hai perso!");
}