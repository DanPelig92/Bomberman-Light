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
cellaZero.addEventListener("click", function() {clickCella(cellaZero)}, {once:true})
cellaUno.addEventListener("click", function() {clickCella(cellaUno)}, {once:true})
cellaDue.addEventListener("click", function() {clickCella(cellaDue)}, {once:true})
cellaTre.addEventListener("click", function() {clickCella(cellaTre)}, {once:true})
cellaQuattro.addEventListener("click", function() {clickCella(cellaQuattro)}, {once:true})
cellaCinque.addEventListener("click", function() {clickCella(cellaCinque)}, {once:true})
cellaSei.addEventListener("click", function() {clickCella(cellaSei)}, {once:true})
cellaSette.addEventListener("click", function() {clickCella(cellaSette)}, {once:true})
cellaOtto.addEventListener("click", function() {clickCella(cellaOtto)}, {once:true})
cellaNove.addEventListener("click", function() {clickCella(cellaNove)}, {once:true})
cellaDieci.addEventListener("click", function() {clickCella(cellaDieci)}, {once:true})
cellaUndici.addEventListener("click", function() {clickCella(cellaUndici)}, {once:true})
cellaDodici.addEventListener("click", function() {clickCella(cellaDodici)}, {once:true})
cellaTredici.addEventListener("click", function() {clickCella(cellaTredici)}, {once:true})
cellaQuattordici.addEventListener("click", function() {clickCella(cellaQuattordici)}, {once:true})
cellaQuindici.addEventListener("click", function() {clickCella(cellaQuindici)}, {once:true})

function clickCella(cella) {
    document.getElementById(cella.id).textContent = grid[cella.id]
    console.log(grid)
    if (grid[cella.id]== "Boom") {
        alert("BOOM! Sei esploso, hai perso");
        window.location.reload();
    } else { 
        counter++
    }
    if (counter==14){
        alert("Hai vinto! Complimenti!");
        window.location.reload();
    }
}