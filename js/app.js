// # Creare una funzione che controlli se una parola sia palindroma o meno
//     - Inizializzare una variabile che sia il risultato di un prompt in cui viene chiesto all'utente di inserire una parola
const parolaUtente = prompt('Inserisci una parola per verificare se sia palindroma')

//     - Creare una funzione che controlli se la parola è palindroma
//         - Creare una funzione
function isPalindromo(parola){

//         - Creare un ciclo un cui la parola viene ciclata lettera per lettera in senso contrario e inserire il risultato in una variabile 
    let parolaReversed = ('')
    for (let i = parola.length - 1; i >= 0; i--){
        parolaReversed += parola[i]
    }
    console.log(parolaReversed)
//         - Confrontare le due variabili
//             - Se sono uguali stamperà in console che la parola è palindroma
//             - Altrimenti stamperà che non è palindroma

    if ( parola===parolaReversed ){
    return console.log(`La parola ${parolaUtente} è palindroma!`)
    }
    else {
        return console.log(`La parola ${parolaUtente} NON è palindroma!`) 
    }    
}

isPalindromo(parolaUtente)


// # Pari o dispari
//     - Chiedere all'utente tramite prompt se sceglie pari o dispari e di scegliere un numero tra 1 e 5(ciclo while per verificare che le informazioni sia corrette)
//     - Inizializzare due variabili con i singoli risultati dei due prompt
let evenOddUser
let numberUser 
do { evenOddUser = prompt('Scegli tra pari o dispari')
     numberUser = parseInt(prompt('Scegli un numero tra 1 e 5')) 
} while ((evenOddUser !== 'pari' || evenOddUser !== 'dispari')||(numberUser < 1 || numberUser > 5));

console.log(evenOddUser)
console.log(numberUser)

//     - Creare una funzione che generi un numero casuale tra 1  e 5 per il computer 
//     - Creare una funzione che sommi i due numeri e calcoli se la somma sia pari o dispari
//     - Dichiare il vincitore