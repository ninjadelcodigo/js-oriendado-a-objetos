
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

class Admin extends Usuario {
    eliminarUsuario(usuario) {
        usuarios = usuarios.filter(u => {
            return u.email != usuario.email;  // filter(...) elimina el elemento del array cuando el filtro es falso
        });
        return this;
    }
 }

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');
let administrador = new Admin('saun@ninjasdelcodigo.pe', 'Saun');

let usuarios = [primerUsuario, segundoUsuario];
console.log(usuarios);

administrador.eliminarUsuario(segundoUsuario);
console.log(usuarios);
