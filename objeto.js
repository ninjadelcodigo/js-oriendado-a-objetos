// emular la clase Usuario usando una función constructora
function Usuario(email, nombre) {
    this.email = email;
    this.nombre = nombre;
    this.online  = false;
}

// añadir funciones login y logout a prototipo
Usuario.prototype.login = function() {
    this.online = true;
    console.log(this.email, "ha comenzado su sesión");
}

Usuario.prototype.logout = function() {
    this.online = false;
    console.log(this.email, "ha cerrado su sesión");
}

function Admin(...args) {
    Usuario.apply(this, args);
}

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');
console.log(primerUsuario);
console.log(segundoUsuario);

// crear un administrador
let administrador = new Admin('shaun@ninjasdelcodigo.pe', 'Shaun');

// invokar método login() de usuario
primerUsuario.login();
segundoUsuario.login();