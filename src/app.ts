//! Ejericio 1 - Singleton
// import { Configuracion } from "./01-Singleton/ejercicio01";

// const configuracion = Configuracion.obtenerInstancia()
// configuracion.actualizarIdioma('Ingles')
// console.log(configuracion.obtenerIdioma())

//! Ejericio 2 - Singleton
// import { ConexionDB } from "./01-Singleton/ejercicio02";

// const conexionDB = ConexionDB.obtenerInstancia()
// conexionDB.conectarDB('localhost', 3000, 'root')
// console.log(conexionDB.mostrarPropiedades())
// conexionDB.desconectarDB()

//! Ejercicio 1 - Factory
// import { DispositivoEntradaFactory } from "./02-Factory/ejercicio01";

// const dispositivo = new DispositivoEntradaFactory()
// const teclado = dispositivo.crearDispositivo('Teclado', 'Logitech K120', 'USB', 'Logitech')
// console.log(teclado.detalles())

//! Ejercicio 2 - Factory
// import { PerifericoSalidaFactory } from "./02-Factory/ejercicio02";

// const periferico = new PerifericoSalidaFactory()
// const monitor = periferico.crearPeriferico('Monitor', 'LG', 'UltraWide', 'HDMI', '2560x1080')
// console.log(monitor.detalles())

//! Ejercicio 1 - Observer
// import { DepartamentoMantenimiento, Equipo } from "./03-Observer/ejercicio01";

// const mantenimiento = new DepartamentoMantenimiento()
// const equipo = new Equipo('Laptop', 'Portatil', 'Disponible', 800)
// equipo.agregarObservador(mantenimiento)
// equipo.aumentarTiempoUso(200, 1000)  // no alcanzo el tiempo de uso
// equipo.aumentarTiempoUso(300, 1000)  // alcanzo el tiempo de uso


//! Ejercicio 2 - Observer
// import { Inventario, Interfazusuario } from "./03-Observer/ejercicio02";

// const interfaz = new Interfazusuario()   
// const inventario = new Inventario()   
// inventario.modificarEquipo(['Laptop', 'Desktop', 'Tablet'])   
// inventario.agregarObservador(interfaz)  
// inventario.agregarEquipo('Celular')   
// inventario.eliminarEquipo('Tablet') 

//! Ejercicio 1 - Adapter
// import { AdaptadorFacturacion, FacturacionVieja } from "./04-Adapter/ejercicio01";

// const factuVieja = new FacturacionVieja()
// const adaptador = new AdaptadorFacturacion(factuVieja)

// const facturaID = adaptador.generarFactura({id: 1, cliente: 'Majo', producto: 'LAPTOP LENOVO', precio: 650000})

// const factura = adaptador.consultarFactura(facturaID)
// console.log(factura)


//! Ejercicio 2 - Adapter
// import { AdaptadorProveedor, ProveedorExternoAPI } from "./04-Adapter/ejercicio02";

// const proveedorExtAPI = new ProveedorExternoAPI()
// const adaptador = new AdaptadorProveedor(proveedorExtAPI)

// const productos = adaptador.obtenerProductos()
// console.log(productos)

// const stock = adaptador.actualizarInventario(1, 50)
// const stock1 = adaptador.actualizarInventario(2, 15)
// console.log(`Stock actualizado: ${stock}`)
// console.log(`Stock actualizado: ${stock1}`)



