const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, listar = false, hasta = 1) => {

    try{

        let salida = '';
        let consola = '';
        
            for (let i = 1; i <= hasta; i++) {
                
                   
                
            
                salida += `${base} x ${i} = ${base*i} \n`;
                consola += `${colors.red(base)} ${'x' .cyan} ${colors.red(i)} ${'='.cyan} ${colors.black(base*i)} \n`;
                
            }
            if(listar){

                console.log('==========================' .green .bgWhite)
                console.log(`   Tabla del ${colors.yellow(base)}   ` .red .bgWhite)
                console.log('==========================' .green .bgWhite)
                console.log(consola .bgYellow);

            }
           



        //Si no ponemos un path de base va a tomar lacarpeta donde se ejucta el archivo de node
        //Atrapar en try y catch para poder manejar el error
        fs.writeFileSync(`tabla-${base}.txt`,salida, )

        // console.log(`tabla-${base}.txt creado`);

        return `./tablas/tabla-${base}.txt creado`
    }catch{
        throw 'ERROR!'

    }
    
    
    
    // fs.writeFile(`tabla-${base}.txt`,salida, (err) =>{
    //     if(err) throw err;
    
    //     console.log(`tabla-${base}.txt creado`);
    
    // })
    
}


module.exports = {
    // crearArchivoTabla : crearArchivoTabla,
    crearArchivoTabla,
}