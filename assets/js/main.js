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
var risultato = palindromeWord( userWord);
console.log(risultato);


