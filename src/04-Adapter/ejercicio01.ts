export class FacturacionVieja {
    crearFactura(datos: string): string {
        return datos
    }

    obtenerFactura(id: number): number {
       return id
    }
}

export interface IFacturacion {

    generarFactura(datos: string): string;
    consultarFactura(id: number): number;   
}

export class AdaptadorFacturacion implements IFacturacion {
    private facturacionVieja: FacturacionVieja

    constructor(facturacionVieja: FacturacionVieja) {
        this.facturacionVieja = facturacionVieja
    }

    generarFactura(datos: any): any {
        return this.facturacionVieja.crearFactura(datos)
    }

    consultarFactura(id: number): number {
        return this.facturacionVieja.obtenerFactura(id)
    }

}