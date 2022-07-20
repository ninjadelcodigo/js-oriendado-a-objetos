
// añadir dos metodos (login y logout) a clase de usuario
class Usuario {
    constructor(email, nombre) {
        this.email =  email;
        this.nombre = nombre;
        this.puntaje = 0;
    }
    login() {
        console.log(this.email, 'acabe de iniciar sesión');
        return this;
    }
    logout() {
        console.log(this.email, 'acabe de cerrar sesión');
        return this;
    }
    actualizarPuntaje() {
        this.puntaje++;
        console.log('El puntaje actual es ahora', this.puntaje);
        return this;
    }
}

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');

// usar invocación de métodos en cadena
primerUsuario.login().actualizarPuntaje().actualizarPuntaje().logout();
