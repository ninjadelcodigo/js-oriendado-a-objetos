// emular la clase Usuario usando una función constructora
function Usuario(email, nombre) {
    this.email = email;
    this.nombre = nombre;
    this.puntaje = 0;
    this.login = function() {
        console.log(this.email, 'acaba de iniciar sesión');
    }
}

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');

// invokar método login() de usuario
primerUsuario.login();
segundoUsuario.login();