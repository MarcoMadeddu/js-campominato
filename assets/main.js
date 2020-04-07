console.log("ok");
// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var numeriVietati = [];
var mieiNumeri = [];
var punteggio = 0;
var difficoltà = "";
var maxTries = 0;
var range = 0;

while(difficoltà > 3 || difficoltà < 1){
  difficoltà = parseInt( prompt('Inserisci la Difficolta \n 1:facile \n 2:medium \n 3:hard') );
}

switch (difficoltà) {
  case 1:
    max = 84;
    range = 100;
    break;
  case 2:
    max = 64;
    range = 80;
    break;
  case 3:
    max = 34;
    range = 50;
    break;

  default:
  console.log("inserisci uno dei valori");
}

console.log("difficoltà scelta: " + difficoltà + " \npuoi inserire numeri da 1 a " + range);



//Array Pc
for (var i = 0; i < 16; i++) {
     numeroBomba = creaNumero();
     controlloPresenza(numeriVietati , numeroBomba);
 }


//Array Utente
for (var i = 0; i < max; i++){
  var valore = parseInt(prompt("inserisci un numero"));

  if(numeriVietati.includes(valore)){
    console.log("++SCONFITTA++\n"  + valore + " è un numero bomba");
    console.log("Tutti i numeri bomba: " + numeriVietati);
    break;
  }

  controlloValidita(valore , mieiNumeri);
  console.log("ultimi numeri: " + mieiNumeri);
}

if(punteggio == 2){
  console.log("++VITTORIA++ \n le tue scelte: " + mieiNumeri);
}

console.log("Le tue scelte: " + mieiNumeri);
console.log("il tuo punteggio: " + punteggio);



//functions
function creaNumero (){
  return  Math.floor( Math.random() * range) + 1;
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
  if (numControllo > range || numControllo < 1 ){
    return  alert("numero non valido, numero massimo consentito: " + range) + (i = i-1);
  }else if (!vetPush.includes(numControllo)) {
      return vetPush.push(numControllo) + (punteggio ++);
    }else {
    return alert("non inserire numeri uguali!")  + (i = i-1);
  }
}
