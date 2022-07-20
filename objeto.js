
// añadir dos metodos (login y logout) a clase de usuario
class Usuario {
    constructor(email, nombre) {
        this.email =  email;
        this.nombre = nombre;
    }
    login() {
        console.log(this.email, 'acabe de iniciar sesión');
    }
    logout() {
        console.log(this.email, 'acabe de cerrar sesión');
    }
}

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');

// invocar métodos de clase
primerUsuario.login();
segundoUsuario.login();
segundoUsuario.logout();
primerUsuario.logout();
 