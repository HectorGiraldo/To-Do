const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = toDo.getListado()

        for (const tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);


        }
        break;
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':
        let borrar = toDo.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('comando no reconocido');
        break;
}