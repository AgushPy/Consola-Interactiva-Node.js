
const {crearArchivoTabla} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colores = require('colors');


console.clear();


// Lo referido a recibir lo escrito por la consola en terminos de espacio de path
// const [ , ,arg3] = process.argv;
// const [ , base =  5] = arg3.split('=');
// console.log(base);

// const base = 4; 

crearArchivoTabla(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo .rainbow, ' Creado' .green))
    .catch(err => console.log(err));

