// numero random giocatore
let numPlayer=Math.floor(Math.random()*6)+1;
console.log(numPlayer);
//numero random pc
let numPc=Math.floor(Math.random()*6)+1;
console.log(numPc);

//condizione
if(numPlayer > numPc){
    let stampa= document.getElementById("title");
    stampa.innerHTML="Ha vinto il player";
}
else if(numPlayer < numPc){
    let stampa= document.getElementById("title");
    stampa.innerHTML="Ha vinto il pc";
}
else if(numPlayer === numPc){
    let stampa= document.getElementById("title");
    stampa.innerHTML="Avete pareggiato";
}