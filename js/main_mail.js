/*
Mail:

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Usiamo un input in html per inserire la mail da cercare.
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

// setto la lista mail con accesso e testo l'array.
const mailList = ["miamail@gmail.com", "suamail@gmail.com", "nostramail@gmail.com", "vostramaik@gmail.com"];
// console.log(mailList);
// console.log(mailList[0]);
// console.log(mailList[1]);
// console.log(mailList[2]);

// chiedo all'utente la sua mail.
const btnLogin = document.querySelector(".request");
const emailInputElement = document.querySelector("[name='email']");
let emailCheck = false;

btnLogin.addEventListener("click", function() {
  if (emailInputElement) {
    const email = emailInputElement.value;
    console.log(email);
  } else {
    console.log("Impossibile trovare l'elemento con il selettore '[name=mail]'");
  }

    // controllo e confronto se la mail dell'utente è presente nella lista.
    const email = emailInputElement.value;

    for (let i = 0; i < mailList.length; i++) {
    /*creo una variabile che di base è false e diventa true se la mail
      inserita corrisponde ad una delle mail in elenco
    */
    
    if (email === mailList[i]) {
      emailCheck = true;
    }
  }
    // stampo alert in base all'esito del controllo.
    if (emailCheck === true) {
    alert("Accesso consentito, benvenuto.");
  }
    else {
    alert("Accesso non consentito.");
  }
});
