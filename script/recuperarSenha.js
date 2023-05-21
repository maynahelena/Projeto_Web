function recuperarSenha(){
    event.preventDefault();
    var auth = firebase.auth();
    var emailAddress = "maynahelena@hotmail.com";
    auth.sendPasswordResetEmail(emailAddress).then(function(){
        console.log("Resetado");
    }).catch(function(error){
        console.log("Erro ao resetar", error);
    });

}