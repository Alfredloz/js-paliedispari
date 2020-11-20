//**Eserzicio 2 */
// 1 utente sceglie pari o dispari e inserisce un numero da 1 a 5
    alert('BENVENUTO! partita pari o dispari con il bot. Sceglierete un numero. Se scegli pari ed la somma dei due numeri è pari ( e viceversa) hai vinto! ');
    var utenteChoice = prompt('scegli pari[p] o dispari[d]');
    var utenteNumero = Number(prompt('scegli un numero da 1 a 5'));
    console.log(utenteNumero);
// 2 generiamo un numero random ( sempre da 1 a 5) per il pc (usando una funzione)
    function botNumber(numbbot) {
      return numeroBot =  Math.ceil(Math.random() * (5 - 0) + 0);
    }
    var robotNumber = botNumber();
    console.log(robotNumber);
// 3 stabiliamo se la somma dei dure numeri è pari o dispari ( usando una funzione)
    function sumCompare(numb1, numb2) {
        var sumResult = numb1 + numb2;
        return sumResult;

    }
    var results = sumCompare(utenteNumero, robotNumber);
    console.log(results);
// 4 dichiariamo il vincitore
   // inserimento dati in HTML
   document.getElementById('choice').innerHTML= '' + utenteChoice;
   document.getElementById('usernumber').innerHTML= '' + utenteNumero;
   document.getElementById('botnumber').innerHTML= '' + robotNumber;
   document.getElementById('sum').innerHTML= '' + results;


    if (utenteChoice === 'p' && results % 2 == 0) {
        console.log('hai vinto tu perchè è uscito pari');
    } else if (utenteChoice === 'd' && results % 2 != 0) {
        alert('hai vinto perchè è uscito dispari')
    } else if (utenteChoice === 'p' && results % 2 != 0 ) {
        alert('hai perso perchè uscito dispari')
    } else  {
        alert('hai perso perchè è uscito pari');
    }

 
