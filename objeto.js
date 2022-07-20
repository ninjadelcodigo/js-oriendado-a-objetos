
// usar encapsulación en objeto
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

// cambiar propiedades de objeto
// primerUsuario.nombre = 'Yoshi';
// console.log(primerUsuario);

// primerUsuario['nombre'] = 'Mario';
// console.log(primerUsuario);

// añadir propiedades de objeto
primerUsuario.edad = 33;

// añadir métodos a objeto
primerUsuario.logInfo = function(){
    console.log(this.nombre, this.edad, this.email);
};

// usar métodos de objeto
primerUsuario.logInfo();
primerUsuario.login();
primerUsuario.logout();