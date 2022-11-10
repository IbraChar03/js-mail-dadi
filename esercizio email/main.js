const email=["luca@gmail.com", "mario@gmail.com"];
let emailnuova= prompt("inserisci la tua email:");

for(let i=0; i< email.length;i++){
    if(email[i] === emailnuova){
        let stampa=document.getElementById("title");
        stampa.innerHTML="sei nella lista degli invitati";
    }

 }