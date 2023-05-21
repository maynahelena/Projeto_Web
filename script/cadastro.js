function CadastraUsuario(){
    event.preventDefault();
    console.log("Usuário Cadastrado");

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    firebase.auth().createUserWithEmailAndPassword(nome, sobrenome, email, senha)
        .then((userCredential) => {
            console.log("Usuario autenticado");
            console.log(userCredential.user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Problema ao autenticar");
            console.log(error.message);
        });
}