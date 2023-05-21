function Autenticar(){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log("Usuario Logado");
            console.log(userCredential.user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Problema ao autenticar o usuario");
            console.log(error.message);
        });
}