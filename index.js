/* ESERCIZIO 1: Crea una funzione che controlli due numeri interi. Ritorna *trues se uno dei due è 50 0 se la somma dei due è 50*/
const isFifty = function (x, y) {
    if (x === 50 || y === 50 || x + y === 50) {
        console.log("true")
    }
}

isFifty(25, 26)

/* ESERCIZIO 2: Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la
stringa e la posizione come parametri e ritorna la stringa modificata. */
const removeChar = function (string, position) {
    let ArrayChar = string.split("");
    ArrayChar.splice(position, 1)
    console.log(ArrayChar.join(""))
}

removeChar("Ciao sono Marco", 3)

/* ESERCIZIO 3: Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false". */
const isBetween = function (x, y) {
    if ((x >= 40 && x <= 60) || (x >= 70 && x <= 100) || (y >= 40 && y <= 60) || (y >= 70 && y <= 100)) {
        console.log("True")
    } else {
        console.log("False")
    }
}

isBetween(1, 75)

/* ESERCIZIO 4: Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
"Los" o "New", altrimenti ritorni "false" */

const losOrNew = function (string) {
    if (string.toLowerCase().startsWith("los") || string.toLowerCase().startsWith("new")) {
        console.log(string);
    } else {
        console.log("False");
    }
}

losOrNew("Stoccarda")

/* ESERCIZIO 5: Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro. */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calculate = function (array) {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum);
}
calculate(numbers)

/* ESERCIZIO 6: Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene,
ritorna "true", altrimenti ritorna "false" */
const numbers2 = [2, 4, 5, 6, 7, 8, 9, 10]
const isContained = function (array) {
    if (array.includes(1) || array.includes(3)) {
        console.log("False");
    } else {
        console.log("True");
    }
}
isContained(numbers2)


/* ESERCIZIO 7: Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° --> ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° gradi --> ritorna "ottuso"
Angolo retto: 90° --> ritorna "retto"
Angolo piatto: 180° --> ritorna "piatto" */

const typeOfAngle = function (angle) {

    switch (true) {
        case (angle < 90):
            console.log("acuto");
            break;
        case (angle > 90 && angle < 180):
            console.log("ottuso");
            break;
        case (angle === 90):
            console.log("retto");
            break;
        case (angle === 180):
            console.log("piatto");
            break;
        default:
            console.log("Nessun tipo di Angolo trovato");
            break;
    }
}
typeOfAngle(90)

/* ESERCIZIO 8: Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili
Torino" deve ritornare "FIAT".
bil• */
const creaAcronimo = function (frase) {
    let arrayFrase = frase.split(" ")
    let iniziali = []
    for (i = 0; i < arrayFrase.length; i++) {
        iniziali.push(arrayFrase[i].charAt(0))
    }
    let acronimo = iniziali.join("")
    console.log(acronimo.toUpperCase());
}
creaAcronimo("Fabbrica italiana automobili torino")

// Esercizi extra
// NOTA: tutti gli esercizi devono essere svolti usando le funzioni
/* 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.*/
const mostUsed = function (stringa) {
    let charMap = {}
    let maxChar = ""
    let maxCount = 0
    for (let char of stringa) {
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char]
            maxChar = char
        }
    }
    console.log(maxChar);
}
mostUsed("Trentatrè tigri contro trentatrè tigri")


/*2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra.
Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo.
Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.*/
const areAnagram = function (stringa1, stringa2) {
    let noPunctuation1 = stringa1.replace(/[^\w\s]|_/g, '') //elimino tutti i caratteri che non sono lettere
    let noPunctuation2 = stringa2.replace(/[^\w\s]|_/g, '') //elimino tutti i caratteri che non sono lettere
    let noSpace1 = noPunctuation1.replace(/\s+/g, "") //elimino tutti gli spazi vuoti
    let noSpace2 = noPunctuation2.replace(/\s+/g, "") //elimino tutti gli spazi vuoti
    let newStringa1 = noSpace1
    let newStringa2 = noSpace2

    if (newStringa1.length != newStringa2.length) {
        console.log("False")
    } else {
        let sortString1 = newStringa1.toLowerCase().split("").sort().join("")
        let sortString2 = newStringa2.toLowerCase().split("").sort().join("")

        if (sortString1 === sortString2) {
            console.log("True")
        } else {
            console.log("False")
        }
    }
}
areAnagram("Sentito", "Insetto")


/*3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].*/
const arrayAnagrammi = [
    "apertosi",
    "apriste",
    "arpiste",
    "arconti",
    "aspro",
    "avresti",
    "cantori",
    "carenti",
    "cartine",
    "cartoni",
    "castrino",
    "castroni",
    "cernita",
    "centrai",
    "cintare",
    "contarsi",
    "contrai",
    "cortina",
    "cornista",
    "cronista",
    "cretina",
    "creanti",
    "crenati",
    "espatri",
    "espatrio",
    "estirpa",
    "estinto",
    "incarto",
    "incastro",
    "incerta",
    "incrosta",
    "insetto",
    "intesto",
    "nacrite",
    "natrice",
    "notiste",
    "nostro",
    "operista",
    "operasti",
    "ospitare",
    "parso",
    "paresti",
    "paresti",
    "pesatori",
    "pesarti",
    "piastre",
    "pietrosa",
    "posareti",
    "prestai",
    "pratesi",
    "prosa",
    "proteasi",
    "rapiste",
    "recanti",
    "recinta",
    "reperto",
    "riposta",
    "riposate",
    "ricanto",
    "riconta",
    "ripesato",
    "ristori",
    "rivesta",
    "saporite",
    "saperti",
    "scontrai",
    "scornati",
    "scartino",
    "scarnito",
    "sentina",
    "sentito",
    "snostra",
    "sonetti",
    "sparo",
    "sparite",
    "spirti",
    "spirate",
    "spora",
    "sporai",
    "stiperà",
    "sterpai",
    "stipare",
    "svitare",
    "sviterà",
    "testino",
    "testoni",
    "tranciò",
    "trancio",
    "trascino",
    "trincea",
    "verista",
    "versati",
    "viraste",
    "visione",
];

const soloAnagrammi = function (stringa, array) {
    let sameLength = []
    let areAnagram = []
    for (let i = 0; i < arrayAnagrammi.length; i++) {
        if (stringa.length === arrayAnagrammi[i].length) {
            sameLength.push(arrayAnagrammi[i])
        }
    }
    /* elimino i caratteri che non sono lettere, elimino gli spazi, trasformo la stringa in un array di lettere,
    ordino le lettere in ordine alfabetico e trasformo l'array ordinato di nuovo in stringa*/
    let newString = stringa.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, "").split("").sort().join("")

    /*per ogni parola, la salvo in una variabile, poi la ordino e controllo */
    for (let i=0; i<sameLength.length; i++) {
       let word = ""
       let newWord = ""
       word = sameLength[i]
       newWord = word.toLowerCase().split("").sort().join("")
       if (newWord === newString) {
        areAnagram.push(word)
       }
    }

    console.log(areAnagram);
}
soloAnagrammi("Cartine", arrayAnagrammi)


/*4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.*/
const isPalindrom = function (stringa) {
    let newString = stringa.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, "")
    let reverseString = newString.split("").reverse().join("")
    if (newString === reverseString) {
        console.log("True")
    } else {
        console.log("False")
    }
    
}
isPalindrom("I topi non avevano nipoti.")


/*5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, 
ma in ordine contrario. Es. 189 ⇒ 981*/
const numberReverse = function (number) {
let reverseNumber = parseInt(number.toString().split("").reverse().join(""))

console.log(reverseNumber);
}
numberReverse(189)


/*6. Scrivi una funzione che accetti un numero positivo X come parametro.
La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
Es.
X = 2
'# '
'##'
X = 3
'# '
'## '
'###'
*/

const scala = function(number) {
    if (number<0 || !Number.isInteger(number)) {
        console.log("Inserisci un numero positivo!")
    } else {
        for (let i=1; i<=number; i++) {
            const simbolo = "#".repeat(i);
            console.log(simbolo)
        }
    }
}
scala(10)


/*7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC” */
const reverseString = function(stringa) {
    let stringaReverse = stringa.split("").reverse().join("")
    console.log(stringaReverse)
}
reverseString("Ciao sono marco")

/*8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]] */
const numeri = [1,2,3,4,5,6,7,8,9]
const dividiArray = function (array, numero){
    if(!Array.isArray(array)){
        console.log("Il primo parametro deve essere un array!")
        return
    }
    if (numero<0 || !Number.isInteger(numero)) {
        console.log("Il secondo parametro deve essere un numero positivo!")
        return
    }
    const arrayDiviso = []
    for (let i=0; i<array.length; i+=numero){
    arrayDiviso.push(array.slice(i, i+numero))
    }
    console.log(arrayDiviso)
}
dividiArray(numeri, 3)

/*9. Scrivi una funzione che accetti un numero positivo X come parametro.
La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
Es.
X = 3
' # '
' ### '
'#####'
*/
const piramide = function(numero){
    if (numero<0 || !Number.isInteger(numero)) {
        console.log("Inserisci un numero positivo!")
        return
    }
    for(let i=1; i<=numero; i++){
        const spazio = " ".repeat(numero-i)
        const simbolo = "#".repeat(2*i-1)
        console.log(spazio+simbolo+spazio)
    }
}
piramide(10)


/*10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
Es. N = 2
[[1, 2],[4, 3]]
N = 3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]
N = 4
[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]] */