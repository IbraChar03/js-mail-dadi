let tasto=document.querySelector("button");

tasto.addEventListener("click",
  function(){
    let numPlayer=Math.floor(Math.random()*6)+1;
    console.log(numPlayer);

    let numPc=Math.floor(Math.random()*6)+1;
    console.log(numPc);
    let imgDadi= "dadi/dice" + numPlayer + ".png";
    let imgDadi2= "dadi/dice" + numPc + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imgDadi);
    document.querySelectorAll("img")[1].setAttribute("src", imgDadi2);
  
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

    let stNumPlayer=document.getElementById("numeroplayer").innerHTML=`Il tuo numero da 1 a 6 è ${numPlayer}` ;
    let stNumPc=document.getElementById("numeropc").innerHTML=`Il numero del pc da 1 a 6 è ${numPc}` ;
  }
   

);

