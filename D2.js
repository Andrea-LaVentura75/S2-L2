/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let numero1 = 50;
let numero2 = 49;
let numeroMaggiore = numero1 > numero2 ? "numero1 è maggiore di numero 2" : "numero2 è maggiore di numero1";
console.log(numeroMaggiore); */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let numeroFornito = 4;
let comparazione = numeroFornito === 5 ? "equal" : "not equal";
console.log(comparazione); */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let numero = 8;
let divisione = numero % 5 === 0 ? "divisibile per 5" : "non divisibile";
console.log(divisione); */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let numero1 = 9;
let numero2 = 1;
if (numero1 === 8 || numero2 === 8) {
  console.log("uno dei 2 numeri è uguale a 8");
} else if (numero1 + numero2 === 8) {
  console.log("l addizione dei due numeri è 8");
} else if (numero1 - numero2 === 8) {
  console.log("la sottrazione dei due numeri è 8");
} else {
  console.log("nessuno dei parametri è rispettato");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 42;
if (totalShoppingCart >= 50) {
  console.log("spedizione gratuita, totale spesa", totalShoppingCart);
} else {
  console.log("costo spedizione di 10, totale spesa", totalShoppingCart + 10);
}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = 50;
let promozione = totalShoppingCart - (totalShoppingCart * 20) / 100;
if (promozione >= 50) {
  console.log("spedizione gratuita, totale spesa", promozione);
} else {
  console.log("costo spedizione di 10, totale spesa", promozione + 10);
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* let numero1 = 5;
let numero2 = 9;
let numero3 = 30;
if (numero1 < numero2 && numero2 < numero3) {
  console.log(numero1, numero2, numero3);
} else if (numero1 < numero3 && numero3 < numero2) {
  console.log(numero1, numero3, numero2);
} else if (numero3 < numero1 && numero1 < numero2) {
  console.log(numero3, numero1, numero2);
} else if (numero2 < numero3 && numero3 < numero1) {
  console.log(numero2, numero3, numero1);
} else if (numero2 < numero1 && numero1 < numero3) {
  console.log(numero2, numero1, numero3);
} else if (numero3 < numero2 && numero2 < numero1) {
  console.log(numero3, numero2, numero1);
}  */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let valoreFornito = 8;
let tipologiaValore = typeof valoreFornito === "number" ? "numero" : "stringa";
console.log(tipologiaValore); */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let numero = 2;
if (numero % 2 === 0) {
  console.log("Numero pari");
} else {
  console.log("Numero dispari");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* let val = 11;
if (val >= 5 && val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
} */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";

me.auto = ["ferrari", "mazda", "fiat"];
console.log(me);*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";

me.auto = ["ferrari", "mazda", "fiat"];
delete me.lastName;
console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";

me.auto = ["ferrari", "mazda", "fiat"];
delete me.lastName;
me.skills.pop();
console.log(me);
/* */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* const numeri = [];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.push(6);
numeri.push(7);
numeri.push(8);
numeri.push(9);
numeri.push(10);
console.log(numeri); */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
const numeri = [];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.push(6);
numeri.push(7);
numeri.push(8);
numeri.push(9);
numeri.push(10);
numeri.splice(9, 1, 100);
console.log(numeri);
/* SCRIVI QUI LA TUA RISPOSTA */
