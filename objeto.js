
// definición de una clase
// crear clase de usuario
class Usuario {
    constructor(email, nombre) {
        this.email =  email;
        this.nombre = nombre;
    }
}

// crear dos objetos de tipo Usuario
let primerUsuario = new Usuario('ryu@ninjasdelcodigo.pe', 'Ryu');
let segundoUsuario = new Usuario('yoshi@ninjasdelcodigo.pe', 'Yoshi');

// mostrar dos objetos de usuario a consola
console.log(primerUsuario);
console.log(segundoUsuario);

// la palabra clave 'new' (nuevo)
// - crea un nuevo objeto vacio
// - setea el valor de 'this' a ser el del nuevo objeto vacio
// - llama al método 'constructor'
 