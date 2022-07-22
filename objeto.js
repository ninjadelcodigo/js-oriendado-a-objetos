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

// usar apply() pasando 'args' para que el prototipo Admin herede las propiedades del prototipo Usuario (email y nombre)
function Admin(...args) {
    Usuario.apply(this, args);   
    this.permiso = 'super admin';
}

// usar Object.create() para que Admin herede los métodos de Usuario (login() y logout()) (cadena de prototipos)
Admin.prototype = Object.create(Usuario.prototype);  

Admin.prototype.eliminarUsuario = function(u) {
    usuarios = usuarios.filter(user => {
        return user.email != u.email;
    });
}

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');

// crear un objeto administrador de tipp Admin
let administrador = new Admin('shaun@ninjasdelcodigo.pe', 'Shaun');

console.log(primerUsuario);
console.log(segundoUsuario);
console.log(administrador);

// invocar método login() y logout de usuario/administrador
primerUsuario.login();
segundoUsuario.login();
administrador.login();
administrador.logout();
segundoUsuario.logout();

// crear una cadena de usuarios con ususarios y administrador
let usuarios = [primerUsuario, segundoUsuario, administrador];
console.log(usuarios);

// administrador puede eliminar un usuario
administrador.eliminarUsuario(segundoUsuario);
console.log(usuarios);

// el usuario normal no puede eliminar un usuario porque eliminanUsuario() no existe en su prototipo
// primerUsuario.eliminarUsuario(administrador);