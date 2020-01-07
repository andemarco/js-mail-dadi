// MAIL CHE HANNO DIRITTO D'ACCESSO
var emailOk = ['aldo@gmail.com', 'giovanni@gmail.com', 'giacomo@gmail.com'];
//  PROMPT PER RICHIEDERE MAIL
var emailInsered = prompt('Ciao!Inserisci qui il tuo indirizzo mail per accedere al download');
// SE EMAIL INSERITA E' PRESENTE, IL VALORE E' TRUE
var loginOk = false;
for (var i = 0; i < emailOk.length; i++) {
  if (emailInsered == emailOk[i]) {
    var loginOk = true;
  }
}
// SE E' TRUE, ACCESSO OK
if (loginOk == true) {
  alert('Procedi con il download')
}
// SE E' FALSE, ACCESSO NEGATO
else {
  alert('Accesso Negato')
}
