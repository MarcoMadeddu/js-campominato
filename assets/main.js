console.log("ok");
// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriVietati = [];
var mieiNumeri = [];
var punteggio = 0;

for (var i = 0; i <= 15; i++){
  numeriVietati.push(creaNumero());

}

for (var i = 0; i <= 15; i++){

  var valore = parseInt(prompt("inserisci un numero"));
  mieiNumeri.push(valore);

  if(numeriVietati.includes(mieiNumeri[i])){
    console.log("++SCONFITTA++ \n hai preso una bomba");
    break;
  }

  punteggio ++;
}

if(punteggio == 16){
  console.log("++VITTORIA++");
}

console.log("il tuo punteggio: " + punteggio);














//functions
function creaNumero (){

  return  Math.floor( Math.random() * 100) + 1;

}


// for (var i = 0; i <= 16; i++){
//
//   numeriVietati.push(creaNumero());
//
//   if(numeriVietati.includes(numeriVietati[i])){
//     var doppio = true;
//     do{
//       numeriVietati[i] = creaNumero();
//       if(numeriVietati.includes(numeriVietati[i])){
//         var doppio = true;
//       }
//         else{
//           doppio = false;
//         }
//     }
//     while (doppio);
//   }
//
//
//
// }
// console.log(numeriVietati);
