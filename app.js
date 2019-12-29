// const multiplicar = require('./multiplicar/multiplicar');

// let base = 3;

// console.log(multiplicar);

//esta parte del codigo fue removido al archivo multiplicar.js-----

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base*i}\n`);
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`la tabla-${base}.txt ha sido creado`);
// });
// 
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = '2';

// console.log(process.argv);

let argv2 = process.argv;
// let parametro = argv[[2]];
// let base = parametro.split('=')[1]

//console.log(argv.base);
//console.log('Limite', argv.limite);
//console.log(argv);