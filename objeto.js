
// usar encapsulación de variable
let primerUsuario = {
    email: 'ryu@ninjasdelcodigo.pe',
    nombre: 'Ryu',
    login () {
        console.log(this.email, 'ha iniciado su sesión');
    },
    logout () {
        console.log(this.email, 'ha cerrado su sesión');
    }
}

// invocar propiedades de objeto creado
console.log(primerUsuario.email);

// invocar métodos de objeto creado
primerUsuario.login();
primerUsuario.logout();
