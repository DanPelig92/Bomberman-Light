import {grid} from './piazzaMine.js'

let bottoneNome = document.getElementById("bottoneNomeGiocatore");
bottoneNome.addEventListener("click", welcomeMessage, false);

let messaggioBenvenuto = document.getElementById("welcome")

function welcomeMessage(){
    messaggioBenvenuto.textContent = "Benvenuto " + document.getElementById("nomeGiocatore").value +". Buona partita!";
}

let counter = 0;

let cellaZero = document.getElementById("0")
let cellaUno = document.getElementById("1")
let cellaDue = document.getElementById("2")
let cellaTre = document.getElementById("3")
let cellaQuattro = document.getElementById("4")
let cellaCinque = document.getElementById("5")
let cellaSei = document.getElementById("6")
let cellaSette = document.getElementById("7")
let cellaOtto = document.getElementById("8")
let cellaNove = document.getElementById("9")
let cellaDieci = document.getElementById("10")
let cellaUndici = document.getElementById("11")
let cellaDodici = document.getElementById("12")
let cellaTredici = document.getElementById("13")
let cellaQuattordici = document.getElementById("14")
let cellaQuindici = document.getElementById("15")
cellaZero.addEventListener("click", function() {clickCella(cellaZero)}, false)
cellaUno.addEventListener("click", function() {clickCella(cellaUno)}, false)
cellaDue.addEventListener("click", function() {clickCella(cellaDue)}, false)
cellaTre.addEventListener("click", function() {clickCella(cellaTre)}, false)
cellaQuattro.addEventListener("click", function() {clickCella(cellaQuattro)}, false)
cellaCinque.addEventListener("click", function() {clickCella(cellaCinque)}, false)
cellaSei.addEventListener("click", function() {clickCella(cellaSei)}, false)
cellaSette.addEventListener("click", function() {clickCella(cellaSette)}, false)
cellaOtto.addEventListener("click", function() {clickCella(cellaOtto)}, false)
cellaNove.addEventListener("click", function() {clickCella(cellaNove)}, false)
cellaDieci.addEventListener("click", function() {clickCella(cellaDieci)}, false)
cellaUndici.addEventListener("click", function() {clickCella(cellaUndici)}, false)
cellaDodici.addEventListener("click", function() {clickCella(cellaDodici)}, false)
cellaTredici.addEventListener("click", function() {clickCella(cellaTredici)}, false)
cellaQuattordici.addEventListener("click", function() {clickCella(cellaQuattordici)}, false)
cellaQuindici.addEventListener("click", function() {clickCella(cellaQuindici)}, false)

function clickCella(cella) {
    document.getElementById(cella.id).textContent = grid[cella.id]
    if (grid[cella.id]== "Boom") {
        messaggioBenvenuto.textContent = "Hai perso, stronzo";
    } else {
        counter++
    }
    if (counter==14){
        messaggioBenvenuto.textContent = "Hai vinto, stronzo";
    }
}