let grid = ["salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo","salvo"];

piazzaMine();

function piazzaMine(){
    let randomMina
    for (let i=0; i<=1; i++){
    grid[randomMina = Math.floor((Math.random() * 15))]="Boom"
    }
}

export {grid};