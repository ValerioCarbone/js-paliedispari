// # Creare una funzione che controlli se una parola sia palindroma o meno
//     - Inizializzare una variabile che sia il risultato di un prompt in cui viene chiesto all'utente di inserire una parola
const parolaUtente = prompt('Inserisci una parola per verificare se sia palindroma');

isPalindromo(parolaUtente);

if (isPalindromo(parolaUtente)) {
    console.log(`La parola ${parolaUtente} è palindroma!`)
}

else {
    console.log(`La parola ${parolaUtente} NON è palindroma!`)
}

// # Pari o dispari
//     - Chiedere all'utente tramite prompt se sceglie pari o dispari e di scegliere un numero tra 1 e 5(ciclo while per verificare che le informazioni siano corrette)
//     - Inizializzare due variabili con i singoli risultati dei due prompt

let evenOddUser;
let numberUser;

do {
    evenOddUser = prompt('Scegli tra pari o dispari').toLowerCase()
} while ((evenOddUser !== 'pari' && evenOddUser !== 'dispari'))

do {
    numberUser = parseInt(prompt('Scegli un numero tra 1 e 5'))
} while ((numberUser < 1 || numberUser > 5) || isNaN(numberUser))

//     - Creare una funzione che generi un numero casuale tra 1  e 5 per il computer e inizializzare una variabile con il risultato
const computerRandomNumber = getRandomIntInclusive(1, 5);
console.log('Il numero del computer è: ' + computerRandomNumber);

// Inizializzare una variabile che sia la somma dei due numeri 
const finalSum = numberUser + computerRandomNumber;
console.log('La somma è: ' + finalSum);

// Utilizzare una funzione che calcoli se la somma è pari o dispari
const result = isEven(finalSum);

//     - Dichiare il vincitore

if (
    (result === true && evenOddUser === 'pari') || 
    (result === false && evenOddUser === 'dispari')) 
    {
    console.log('Il vincitore è l\'utente')
}
else {
    console.log('Il vincitore è il computer')
}


//     - Creare una funzione che controlli se la parola è palindroma
//         - Creare una funzione
function isPalindromo(parola) {

    //         - Creare un ciclo un cui la parola viene ciclata lettera per lettera in senso contrario e inserire il risultato in una variabile 
    let parolaReversed = ('')
    parola = parola.toLowerCase()
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaReversed += parola[i]
    }
    console.log(parolaReversed)
    //         - Confrontare le due variabili
    //             - Se sono uguali stamperà in console che la parola è palindroma
    //             - Altrimenti stamperà che non è palindroma

    if (parola === parolaReversed) {
        return true
    }
    else {
        return false
    }
}



// Funzione che genera numero intero casuale  
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//     - Creare una funzione che calcoli se la somma sia pari o dispari

function isEven(sum) {
    if (sum % 2 === 0) {
        return true
    }
    else {
        return false
    }
}