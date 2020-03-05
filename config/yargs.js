const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
    .command('crear', 'crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'imprime en consola las tareas')
    .command('borrar', 'borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}