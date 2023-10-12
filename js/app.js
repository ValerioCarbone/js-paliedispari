// # Creare una funzione che controlli se una parola sia palindroma o meno
//     - Inizializzare una variabile che sia il risultato di un prompt in cui viene chiesto all'utente di inserire una parola
let parolaUtente = prompt('Inserisci una parola per verificare se sia palindroma')

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