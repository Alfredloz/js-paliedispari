// *******esercizio 1: *******//
// 1 chiedere all'utente di inserire una parola
var userWord = prompt('inserisci una parola');
// 2 creare una funzione per capire se la parole è palindroma
function palindromeWord(stringa) {
  //creazione var lunghezza stringa 
    var lun = userWord.length;
    var met = Math.floor(lun / 2);
    for (let i = 0; i < met; i++) {
        var lenWord = userWord[i];
        if (lenWord !== userWord[lun - 1 - i]) {
            return false;
        } 
        return true;
    }
}
var risultato = palindromeWord('ossa');
console.log(risultato);


//**Eserzicio 2 */
// 1 utente sceglie pari o dispari e inserisce un numero da 1 a 5
// 2 generiamo un numero random ( sempre da 1 a 5) per il pc (usando una funzione)
// 3 stabiliamo se la somma dei dure numeri è pari o dispari ( usando una funzione)
// 4 dichiariamo il vincitore