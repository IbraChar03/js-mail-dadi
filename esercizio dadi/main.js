let tasto=document.querySelector("button");

tasto.addEventListener("click",
  function(){
    let numPlayer=Math.floor(Math.random()*6)+1;
    console.log(numPlayer);

    let numPc=Math.floor(Math.random()*6)+1;
    console.log(numPc);


//condizione
    if(numPlayer > numPc){
    let stampa= document.getElementById("title");
    stampa.innerHTML="Hai vinto tu";
    }
    else if(numPlayer < numPc){
    let stampa= document.getElementById("title");
    stampa.innerHTML="Ha vinto il pc";
    }
    else if(numPlayer === numPc){
    let stampa= document.getElementById("title");
    stampa.innerHTML="Avete pareggiato";
    }
  }

);
