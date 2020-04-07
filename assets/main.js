console.log("ok");
// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriVietati = [];
var mieiNumeri = [];
var punteggio = 0;

//Array Pc
for (var i = 0; i < 16; i++) {
     numeroBomba = creaNumero();
     controlloPresenza(numeriVietati , numeroBomba);
 }


//Array Utente
for (var i = 0; i < 84; i++){
  var valore = parseInt(prompt("inserisci un numero"));

  if(numeriVietati.includes(valore)){
    console.log("++SCONFITTA++\n"  + valore + " è un numero bomba");
    console.log("Tutti i numeri bomba: " + numeriVietati);
    break;
  }

  controlloValidita(valore , mieiNumeri);
}

if(punteggio == 84){
  console.log("++VITTORIA++ \n le tue scelte: " + mieiNumeri);
}

console.log("Le tue scelte: " + mieiNumeri);
console.log("il tuo punteggio: " + punteggio);



//functions
function creaNumero (){
  return  Math.floor( Math.random() * 100) + 1;
}

//La funzione si occupa di verificare che l'array del pc non abbia duplicati al suo interno

function controlloPresenza(vetA , num){
   if (!vetA.includes(num)) {
       return vetA.push(num);
   } else {
     return i = i - 1;
   }
}

//la funzione verifica la validità del numero inserito dall'utente: non deve essere un duplicato e deve essere compreso tra 1 e 100;

function controlloValidita(numControllo , vetPush){
  if (numControllo > 100 || numControllo < 1 ){
    return  alert("numero non valido") + (i = i-1);
  }else if (!vetPush.includes(numControllo)) {
      return vetPush.push(numControllo) + (punteggio ++);
    }else {
    return alert("non inserire numeri uguali!")  + (i = i-1);
  }
}
