let operacionesArchivo = require('./operacionesArchivo.js');


let concesionaria = {
  autos: operacionesArchivo.leerArchivoJson(),

  listar: function() {
      console.log(this.autos);
  },

  buscarAuto: function(patenteBuscada) {
    console.log('========================')
    console.log('Buscando el auto de patente '+patenteBuscada)
    console.log('========================')
    autoBuscado = this.autos.filter(auto => auto.patente === patenteBuscada)[0];
    return autoBuscado != undefined ? autoBuscado : null;

  },

  venderAuto: function(patenteBuscada) {
    let autoVendido = this.buscarAuto(patenteBuscada);
    autos = this.autos.map(function(auto){
      if (auto.patente == patenteBuscada){
        auto.vendido = true;
        return auto;
      } else {
        return auto;
      }
    })
    operacionesArchivo.grabarUnJson(JSON.stringify(autos));
    console.log('Felicitaciones, auto vendido!')
  },

  autosParaLaVenta: function() {
    console.log('========================')
    console.log('Estos autos estan en venta:')
    console.log('========================')
    return this.autos.filter(auto => auto.vendido == false)
  },

  autosNuevos: function() {
    
    console.log('========================')
    console.log('Estos autos estan en venta y son 0km:')
    console.log('========================')
    return this.autosParaLaVenta().filter(auto => auto.km == 0)
  },

  listaDeVentas: function() {
    let autosVendidos = this.autos.filter(auto => auto.vendido == true);
    var ventas = []
    autosVendidos.forEach(function(auto){
      ventas.push(auto.precio);
    });
    return ventas;
  },

  totalDeVentas: function() {

    let ventas = this.listaDeVentas();
    if (ventas.length > 0){
      return ventas.reduce((a, b) => a + b, 0)
    } else {
      return 0;
    }
  },

  puedeComprar: function(auto, persona){
    
    return auto.precio <= persona.capacidadDePagoTotal  && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
  },

  autosQuePuedeComprar: function(persona){
    let autosALaVenta = this.autosParaLaVenta();
    let autosComprables = autosALaVenta.filter(function(auto){
      return concesionaria.puedeComprar(auto, persona);
    });
    return autosComprables;
  },

  marcaAuto: function(buscarMarca) {
    console.log('========================')
    console.log('La marca del auto es: '+buscarMarca)
    console.log('========================')
   
    autoBuscado = this.autos.filter(auto => auto.marca === buscarMarca);
    return autoBuscado != undefined ? autoBuscado : null;
  },

  color: function(buscarColor) {
    console.log('========================')
    console.log('El color del auto es: '+buscarColor)
    console.log('========================')
   
    colorBuscado = this.autos.filter(auto => auto.color === buscarColor);
    return colorBuscado != undefined ? colorBuscado : null;
  },

  modelo:function(buscarModelo){
    console.log('========================')
    console.log('el anio del auto: '+buscarModelo)
    console.log('========================')

    modeloBuscado= this.autos.filter(auto => auto.modelo === buscarModelo);
    return modeloBuscado != undefined ? modeloBuscado:null;
  }
  

}

module.exports = concesionaria;