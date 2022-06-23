let funcionalidadTareas = require('./funcionalidadTareas.js');


let accion = process.argv[2];

let parametroAdicional = process.argv[3];

let parametroAdicionalDos = process.argv[4];

switch(accion) {
    case 'listar':
        funcionalidadTareas.listar();
        break;

    case 'buscar':
        console.log(funcionalidadTareas.buscarAuto(parametroAdicional))
        break;

    case 'vender':
        funcionalidadTareas.venderAuto(parametroAdicional);
        break;
    
    case 'enVenta':
        console.log(funcionalidadTareas.autosParaLaVenta());
        break;

    case 'nuevos':
        console.log(funcionalidadTareas.autosNuevos());
        break;

    case 'listaVentas':
        console.log(funcionalidadTareas.listaDeVentas());
        break;

    case 'totalVentas':
        console.log(funcionalidadTareas.totalDeVentas());
        break;

    case 'puedeComprar':
        // toma como primer argumento valor total que el usuario esta dispuesto a pagar
        // toma como segundo argumento valor que el usuario puede pagar por cuota
        // devuelve todos los autos que la persona puede pagar con esas restricciones
        let persona = {
            "capacidadDePagoTotal" : parametroAdicional,
            "capacidadDePagoEnCuotas" : parametroAdicionalDos
        }
        console.log(funcionalidadTareas.autosQuePuedeComprar(persona));
        break
    
    case 'buscarMarca':
        console.log(funcionalidadTareas.marcaAuto(parametroAdicional));
        break 
    
    case 'listarColor':
        console.log(funcionalidadTareas.color(parametroAdicional));
        break

    case 'listarModelo':
        console.log(funcionalidadTareas.modelo(parametroAdicional));
        break
    
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: vender, enVenta, nuevos, listaVentas, totalVentas, puedeComprar ');
        break;
}
