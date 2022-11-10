const email=["luca@gmail.com", "mario@gmail.com"];
let emailnuova= prompt("inserisci la tua email:");
let Invitato=false;

for(let i=0; i< email.length;i++){
    if(email[i] === emailnuova){
        let stampa=document.getElementById("title");
        stampa.innerHTML="sei nella lista degli invitati";
        Invitato=true;
    }
 }
  if(Invitato==false){
    let stampa2=document.getElementById("title");
    stampa2.innerHTML=" NON sei nella lista degli invitati";
   
}
