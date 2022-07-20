
// usar encansulacion
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

// invocar propiedades de objeto primerUsuario
console.log(primerUsuario.email);

// invocar metododos de objeto primerUsuario
primerUsuario.login();
primerUsuario.logout();
