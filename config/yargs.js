const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type : 'number',
        demandOption : true,
        describe: 'Base para la tabla de multiplicar'
    })
    .option('l', {
        alias : 'listar',
        type  : 'boolean',
        default : false,
        describe : 'Con esta opcion puedes imprimir o no en consola dicha tabla'
    })
    .option('h', {
        alias: 'hasta',
        type : 'number',
        demandOption : true,
        describe :'Indique un valor nuemrico de hasta cuanto sera la tabla',
        default :  1,
    })
    .check((argv,options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;