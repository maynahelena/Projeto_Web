function CadastraUsuario(){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            console.log("Usuario criado");
            console.log(userCredential.user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Problema ao criar usuário");
            console.log(error.message);
        });
}