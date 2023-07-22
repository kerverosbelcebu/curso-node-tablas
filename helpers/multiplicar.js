const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10)=>{
    try {
        console.clear();
        let salida, consola='';
        for(let i=1;i<=hasta;i++){
        consola += `${base} X ${i} = ${base*i}\n`;
        salida += `${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if( listar ){
            console.log('==============='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('==============='. green);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    
}

// este codigo nos permite trabajar de forma
//global y su sintaxis es la siguiente:

module.exports = {
    //esto esta apuntando a crearArchivo
    //esta llamando a crearArchivo
    //funcion: crearArchivo
    crearArchivo
}