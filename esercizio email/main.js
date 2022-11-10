
let tasto= document.querySelector("button");
tasto.addEventListener("click",
  function(){
    const email=["luca@gmail.com", "mario@gmail.com", "fabio@gmail.com", "andrea@gmail.com"];
    let emailnuova2=document.getElementById("nuovaemail").value;
    let invitato=false;

    for(let i=0; i< email.length;i++){
    if(email[i] === emailnuova2){
        invitato=true;
    }

    }
    if(invitato==true){
     let stampa=document.getElementById("title");
     stampa.innerHTML="sei nella lista degli invitati";
    
    }
    else if (invitato==false){
    let stampa=document.getElementById("title");
    stampa.innerHTML="NON sei nella lista degli invitati";
    }
    }
);

