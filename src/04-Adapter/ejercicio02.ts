export class ProveedorExternoAPI {
  private productos: any[] = [
    { id: 1, producto: "Notebook", cantidad: 10 },
    { id: 2, producto: "Monitor", cantidad: 20 },
    { id: 3, producto: "Impresora", cantidad: 30 },
  ];

  fetchProductos(): any[] {
    return this.productos;
  }

  updateStock(id: number, cantidad: number): boolean {
    const producto = this.productos.find(p => p.id === id);   
    if (producto) {
      producto.stock = cantidad;   
      console.log(`El stock del producto con id ${id} se actualizo a ${cantidad} unidades`); 
        return true;
    }
    return false;
  }
}

export interface IProveedor {
  obtenerProductos(): any[];
  actualizarInventario(id: number, cantidad: number): boolean;
}

export class AdaptadorProveedor implements IProveedor {
  private proveedorExternoAPI: ProveedorExternoAPI;

  constructor(proveedorExternoAPI: ProveedorExternoAPI) {
    this.proveedorExternoAPI = proveedorExternoAPI;
  }

  obtenerProductos(): any[] {
    return this.proveedorExternoAPI.fetchProductos();
  }

  actualizarInventario(id: number, cantidad: number): boolean {
    const data = this.proveedorExternoAPI.updateStock(id, cantidad);   // se modifica el stock del producto con el id y la cantidad recibida por parámetro 
    if (data) {
      console.log('Stock actualizado: ', this.obtenerProductos());  // stock actualizado de los productos 
    }
    return data;
  }
}