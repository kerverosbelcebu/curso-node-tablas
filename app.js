//importamos o llamos la funcion para 
//crear archvos, ver documentacion
//aplicamos desestructuracion 
const{crearArchivo}=require('./helpers/multiplicar');
//en este punto invocamos a yargs
const argv = require('./config/yargs');
require('colors'); //importamos los colores
console.clear();

// console.log(argv);

// console.log('base: yargs', argv.b);
//.rainbow transforma en color arco iris
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log(
        nombreArchivo.rainbow, 'creado'))
    .catch(err=>console.log(err));